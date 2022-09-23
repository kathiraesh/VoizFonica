import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { Login } from '../login';

import { LoginService } from '../login.service';

@Component({

  selector: 'app-login',

  templateUrl: './login.component.html',

  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit {
  email: any;
  password: any;
    login= new Login();
    logins: any;
    deleteMessage: any;
    message: any;
    edited: any;
    resp:any;
    constructor(private loginService: LoginService,private router:Router) { }
    ngOnInit(): void {
    }
    profileForm1 = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),
    });

    get f(){
      return this.profileForm1.controls;

    }
    submit(){
      this.email=this.f['email'].value;
      this.password=this.f['password'].value;
    
      this.saveObject();
      this.loginService
      .createLog(this.login).subscribe(
        (data)=>{alert("You Belong Here                                                                         WELCOME HOME");console.log(data);

        this.resp=data;

        sessionStorage.setItem('userId',this.resp.id);
        sessionStorage.setItem('email',this.resp.email);
        console.log(sessionStorage.getItem('userId')); this.router.navigate(['/home'])},
        (error) => {alert("Invalid email address or password");}
      );
      
    }
    saveObject(){
      this.login.email=this.email;
      this.login.password=this.password;
    
      console.log('ready data: ',this.login)
    }
    getdata() {
      this.loginService.getLoginList().subscribe((data: any) => {
          console.log('Hii all');
          this.logins = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file
      });
    
    }
  // getregister(){

  //   this.registerService.getRegisterList().subscribe((data: any) => {
  //   console.log ("Hii all");
    //  this.registers = data.filter((x:any) => x.productPrice>1000);  // we are pulled data from backend to the UI inside TS file and taken on HTML file
  //  })

   //this.filtermydata(this.products);
// }

  //DELETE
  deletedata(id:any){
    //Add some Logic here to delete the
    this.loginService.deletelog(id)
   .subscribe(
     data => {

        console.log(data);

        this.deleteMessage=true;

        this.loginService.getLoginList().subscribe(data =>{

          this.logins =data

          })

        },

      error => console.log(error));  

  }

  // onSubmit() {
  //   // some stuff
  //   this.router.navigate(['/home']);
  // }

  }

