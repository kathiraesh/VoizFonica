import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { Register } from '../register';

import { RegisterService } from '../register.service';

@Component({

  selector: 'app-register',

  templateUrl: './register.component.html',

  styleUrls: ['./register.component.css']

})

export class RegisterComponent implements OnInit {
  firstname: any;
  lastname: any;
  email: any;
  mobilenumber:any;
  password:any;
    register= new Register();
    registers: any;
    deleteMessage: any;
    message: any;
    edited: any;
    constructor(private registerService: RegisterService,private router:Router) { }
    ngOnInit(): void {
    }
    profileForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastname: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5)]),
      mobilenumber: new FormControl('', [Validators.required, Validators.minLength(6),Validators.pattern('[0-9][0-9]')]), 
      password: new FormControl('', [Validators.required,Validators.minLength(6)]),

      

    });

    get f(){
      return this.profileForm.controls;

    }
    submit(){
      // console.log("Amit Trying to connect TS from HTML File");
      this.firstname=this.f['firstname'].value;
      this.lastname=this.f['lastname'].value;
      this.email=this.f['email'].value;
      this.mobilenumber=this.f['mobilenumber'].value;
      this.password=this.f['password'].value;
      // console.log("bbb",this.discountProduct);

      this.register.firstname=this.firstname;
      this.register.lastname=this.lastname;
      this.register.email=this.email;
      this.register.mobilenumber=this.mobilenumber; 
      this.register.password=this.password;
      console.log("HI",this.register)
      this.registerService.createReg(this.register)
      .subscribe(
        (data) => {alert("Registered");this.router.navigate(['/login']);},
      (error) => {alert("This User Already Exist");this.router.navigate(['/register']);}
      );
      this.message = "Registered Successfully"
      this.edited = true;
       }
       

  // user(arg0: string, user: any) {

  //   throw new Error('Method not implemented.');

  // }
      //Read or GET Operation..............
    getdata(){
         
          this.registerService.getRegisterList().subscribe((data: any) => {
          console.log ("Hii all");
           this.registers = data;  // we are pulled data from backend to the UI inside TS file and taken on HTML file
         })
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
    this.registerService.deletereg(id)
   .subscribe(
     data => {

        console.log(data);

        this.deleteMessage=true;

        this.registerService.getRegisterList().subscribe(data =>{

          this.registers =data

          })

        },

      error => console.log(error));  

  }

  // onSubmit() {
  //   // some stuff
  //   this.router.navigate(['/home']);
  // }

  }
