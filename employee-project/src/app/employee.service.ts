import { Injectable } from '@angular/core';
import { Employee } from './employee';


@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [
    { id: 1, name: 'John Doe', position: 'Developer', department: 'IT', salary: 50000 },
    { id: 2, name: 'Jane Smith', position: 'Manager', department: 'HR', salary: 70000 },
    { id: 2, name: 'harde josan', position: 'Manager', department: 'HR', salary: 70000 },
    // Add more employee data here...
  ];

  getEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find((emp) => emp.id === id);
  }
}
