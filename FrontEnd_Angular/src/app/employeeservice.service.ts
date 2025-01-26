import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService{

  private baseUrl = "http://localhost:8080/api/v1/employees";
  constructor(private httpclient: HttpClient) {
  }

  public getEmployeeslist() : Observable<Employee[]>{
      return this.httpclient.get<Employee[]>(`${this.baseUrl}`);
  }
}
