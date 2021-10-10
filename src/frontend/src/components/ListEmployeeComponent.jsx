import React, { Component } from "react";
import EmployeeService from "../services/EmployeeService";

class ListEmployeeComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            employees: [],
        };

        this.addEmployee = this.addEmployee.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.viewEmployee = this.viewEmployee.bind(this);
    }

    deleteEmployee(id) {
        EmployeeService.deleteEmployee(id).then((res) =>
            res.json().then((data) => {
                this.setState({
                    employees: this.state.employees.filter(
                        (emp) => emp.id !== id
                    ),
                });
            })
        );
    }

    updateEmployee(id) {
        this.props.history.push(`/add-employee/${id}`);
    }

    viewEmployee(id) {
        this.props.history.push(`/employee/${id}`);
    }

    addEmployee() {
        this.props.history.push("/add-employee/-1");
    }

    componentDidMount() {
        EmployeeService.getEmployees().then((res) =>
            res.json().then((data) => {
                this.setState({ employees: data });
            })
        );
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <button className="btn btn-primary" onClick={this.addEmployee}>
                    Add Employee
                </button>
                <div>
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.lastName}</td>
                                    <td>{employee.emailId}</td>
                                    <td>
                                        <button
                                            className="btn btn-info"
                                            onClick={() =>
                                                this.updateEmployee(employee.id)
                                            }
                                        >
                                            Update
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            style={{ marginLeft: "10px" }}
                                            onClick={() =>
                                                this.deleteEmployee(employee.id)
                                            }
                                        >
                                            Delete
                                        </button>
                                        <button
                                            className="btn btn-info"
                                            style={{ marginLeft: "10px" }}
                                            onClick={() =>
                                                this.viewEmployee(employee.id)
                                            }
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployeeComponent;
