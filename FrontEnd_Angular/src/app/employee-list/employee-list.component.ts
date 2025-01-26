import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeserviceService } from '../employeeservice.service';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{

  constructor(private employeeService: EmployeeserviceService){}

  employees : Employee[] = [];
  
  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.employeeService.getEmployeeslist().subscribe(
      (data: Employee[]) => {
        console.log(data);
        this.employees = data;
      }
    );
  }

}
