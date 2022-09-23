import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router : Router) { }



  isLoggedOn(){

    if( sessionStorage.getItem('userId') != null){

        return true;

    }

    alert("Please Login To Continue Your Services");

    this.router.navigate(['/login']);

    return false;

   

  }
}
