import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:8017';        
  //Spring Boot End point Root
constructor(private http:HttpClient) { }
getLoginList(): Observable<any> {

  return this.http.get(`${this.baseUrl}`+'/getlog');  //will change ...As Per ordermanagement

}
createLog(login: object): Observable<object> {

  console.log("kathir",login)

   return this.http.post(`${this.baseUrl}`+'/login', login);

 }
 deletelog(id: number): Observable<any> {

  return this.http.delete(`${this.baseUrl}/deletelog/${id}`, { responseType: 'text' });

}

}
