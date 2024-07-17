import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, Employee } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private userData = 'assets/data/json/user.json';
  private emplpyeeData = 'assets/data/json/employees.json';

  

  constructor(private http: HttpClient) { }
  
  getEmployeeData(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.emplpyeeData);
  }


  getUserData(): Observable<User>{
    return this.http.get<User>(this.userData);
  }

}
