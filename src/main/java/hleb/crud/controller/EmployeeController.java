package hleb.crud.controller;

import hleb.crud.exception.ResourceNotFoundException;
import hleb.crud.model.Employee;
import hleb.crud.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping("/employees")
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @PostMapping("/employees")
    public Employee createEmployee(@RequestBody Employee employee) {
        return employeeRepository.save(employee);
    }

    @GetMapping("employees/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable long id) {
        return ResponseEntity.ok(employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee not exist: id  = " + id)));
    }

    @PutMapping("employees/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable long id, @RequestBody Employee newEmployee) {
        return ResponseEntity.ok(employeeRepository.findById(id)
                                                   .map(employee -> {
                                                       employee.setFirstName(newEmployee.getFirstName());
                                                       employee.setLastName(newEmployee.getLastName());
                                                       employee.setEmailId(newEmployee.getEmailId());
                                                       return employeeRepository.save(employee);
                                                   })
                                                   .orElseGet(() -> {
                                                       newEmployee.setId(id);
                                                       return employeeRepository.save(newEmployee);
                                                   }));
    }
}
