// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AdminloginService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class AdminloginService {

  private baseUrl = 'http://localhost:8017';



  constructor(private http:HttpClient) { }

 

  createlog(admin: Object): Observable<object> {



    console.log("Sachin",admin)

 

    return this.http.post(`${this.baseUrl}`+'/adminlogin', admin);

 

    }

}
