const EMPLOYEE_API_BASE_URL: string = "http://localhost:8080/api/v1/employees";

type Employee = {
    id: number;
    firstName: string;
    lastName: string;
    emailId: string;
}

class EmployeeService {

    getEmployees(): Promise<Response> {
        return fetch(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee: Employee): Promise<Response> {
        return fetch(EMPLOYEE_API_BASE_URL, {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        });
    }

    updateEmployee(employee: Employee): Promise<Response> {
        console.log(EMPLOYEE_API_BASE_URL + "/" + employee.id);
        return fetch(EMPLOYEE_API_BASE_URL + "/" + employee.id, {
            method: 'PUT',
            body: JSON.stringify(employee),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        });
    }

    getEmployeeById(employeeId: number): Promise<Response> {
        return fetch(EMPLOYEE_API_BASE_URL + "/" + employeeId);
    }
}

export default new EmployeeService();