import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private baseUrl = 'http://localhost:8017'; //Spring Boot End point Root
  deleteUser: any;

  constructor(private http:HttpClient) { }
  getConList():Observable<any>{
    return this.http.get(`${this.baseUrl}`+'/getcon');//will change ...As Per ordermanagement
  }
  deleteCon(id: number): Observable<any> {
     return this.http.delete(`${this.baseUrl}/deletecon/${id}`, { responseType: 'text' });
   }

createCon(contact: Object): Observable<object> {

console.log("Balaji",contact)

return this.http.post(`${this.baseUrl}`+'/addcon', contact);

}
// createlog(register: Object): Observable<object> {

//   console.log("Sachin",register)

//   return this.http.post(`${this.baseUrl}`+'/login', register);

//   }
  }
