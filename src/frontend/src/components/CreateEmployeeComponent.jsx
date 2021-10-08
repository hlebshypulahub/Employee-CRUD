import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            emailId: "",
        };

        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();

        let employee = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            emailId: this.state.emailId,
        };

        EmployeeService.createEmployee(employee).then((res) => {
            this.props.history.push("/employees");
        });
    };

    cancel() {
        this.props.history.push("/employees");
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    };

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    };

    changeEmailIdHandler = (event) => {
        this.setState({ emailId: event.target.value });
    };

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Employee</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First name:</label>
                                        <input
                                            className="form-control"
                                            placeholder="First name"
                                            name="firstName"
                                            value={this.state.firstName}
                                            onChange={(e) =>
                                                this.changeFirstNameHandler(e)
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Last name:</label>
                                        <input
                                            className="form-control"
                                            placeholder="Last name"
                                            name="lastName"
                                            value={this.state.lastName}
                                            onChange={(e) =>
                                                this.changeLastNameHandler(e)
                                            }
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Email ID:</label>
                                        <input
                                            className="form-control"
                                            placeholder="Email ID"
                                            name="emailId"
                                            value={this.state.emailId}
                                            onChange={(e) =>
                                                this.changeEmailIdHandler(e)
                                            }
                                        />
                                    </div>
                                    <button
                                        className="btn btn-success"
                                        onClick={this.saveEmployee}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="btn btn-danger"
                                        onClick={this.cancel.bind(this)}
                                        style={{ marginLeft: "10px" }}
                                    >
                                        Cancel
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateEmployeeComponent;
