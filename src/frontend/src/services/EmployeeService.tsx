const EMPLOYEE_API_BASE_URL: string = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees(): Promise<Response> {
        return fetch(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee: Object): Promise<Response> {
        return fetch(EMPLOYEE_API_BASE_URL, {
            method: 'POST',
            body: JSON.stringify(employee),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        });
    }

}

export default new EmployeeService();