import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
email:any
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.email=sessionStorage.getItem('email');
  }
  logout(){

    sessionStorage.clear();
    alert("Logout is the Hardest Button to Click");
    this.router.navigate(['login']);

  }

}
