import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminregisterService {
  private baseUrl = 'http://localhost:8017'; //Spring Boot End point Root
  deleteUser: any;

  constructor(private http:HttpClient) { }
  getUserList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'/getreg');//will change ...As Per ordermanagement
    }
    deletereg(id: number): Observable<any> {
       return this.http.delete(`${this.baseUrl}/deletereg/${id}`, { responseType: 'text' });
     }

  createUser(register: Object): Observable<object> {

  console.log("Sachin",register)

  return this.http.post(`${this.baseUrl}`+'/addreg', register);

  }
  // createlog(register: Object): Observable<object> {

  //   console.log("Sachin",register)
  
  //   return this.http.post(`${this.baseUrl}`+'/login', register);
  
  //   }
}
