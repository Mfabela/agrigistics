import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private userData = 'assets/data/json/user.json';
  private emplpyeeData = 'assets/data/json/employees.json';

  

  constructor(private http: HttpClient) { }
  
  getEmployeeData(): Observable<any>{
    return this.http.get<any>(this.emplpyeeData);
  }


  getUserData(): Observable<any>{
    return this.http.get<any>(this.userData);
  }

}
