import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adminpostpaid',
  templateUrl: './adminpostpaid.component.html',
  styleUrls: ['./adminpostpaid.component.css']
})
export class AdminpostpaidComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
        sessionStorage.clear();
        alert("You have been logged out!")
        this.router.navigate(['/adminlogin']);
      }

}
