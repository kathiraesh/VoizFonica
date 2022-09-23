import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindongle',
  templateUrl: './admindongle.component.html',
  styleUrls: ['./admindongle.component.css']
})
export class AdmindongleComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  logout(){
        sessionStorage.clear();
        alert("You have been logged out!")
        this.router.navigate(['/adminlogin']);
      }

}
