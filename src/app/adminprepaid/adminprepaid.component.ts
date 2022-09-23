import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminprepaid',
  templateUrl: './adminprepaid.component.html',
  styleUrls: ['./adminprepaid.component.css']
})
export class AdminprepaidComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
        sessionStorage.clear();
        alert("You have been logged out!")
        this.router.navigate(['/adminlogin']);
      }
    

}
