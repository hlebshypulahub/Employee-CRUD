const EMPLOYEE_API_BASE_URL: string = "http://localhost:8080/api/v1/employees";

class EmployeeService {

    getEmployees(): Promise<Response> {
        return fetch(EMPLOYEE_API_BASE_URL);
    }

}

export default new EmployeeService();