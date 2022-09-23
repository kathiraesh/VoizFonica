import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private baseUrl = 'http://localhost:8017';        
  //Spring Boot End point Root
constructor(private http:HttpClient) { }
getRegisterList(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'/getreg');  //will change ...As Per ordermanagement



}
createReg(register: object): Observable<object> {

  console.log("kathir",register)

   return this.http.post(`${this.baseUrl}`+'/addreg', register);



 }
 deletereg(id: number): Observable<any> {



  return this.http.delete(`${this.baseUrl}/deletereg/${id}`, { responseType: 'text' });



}

}
