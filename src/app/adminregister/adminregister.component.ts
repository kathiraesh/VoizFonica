import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Adminregister } from '../adminregister';
import { AdminregisterService } from '../adminregister.service';

@Component({
  selector: 'app-adminregister',
  templateUrl: './adminregister.component.html',
  styleUrls: ['./adminregister.component.css']
})
export class AdminregisterComponent implements OnInit {
  adminreg=new Adminregister();
  namefirst: any;
  namelast: any;
  emailId: any;
  mobileNum: any;
  passcode: any;
  edited: any;
  message: any;
  mithresh: any;
  registers: any;
  deleteMessage: any;

  constructor(private adminregisterservice:AdminregisterService, private router:Router) { }

  ngOnInit(): void { }

  profileForm = new FormGroup({
    firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
    ]),
    lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(10),

    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(20),

  ]), 
  mobilenumber: new FormControl('', [
    Validators.required,
    Validators.minLength(10),

  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]),

});
get f(){
  return this.profileForm.controls;

}
submit(){
  this.namefirst=this.f['firstname'].value;
  this.namelast=this.f['lastname'].value;
  this.emailId=this.f['email'].value;
  this.mobileNum=this.f['mobilenumber'].value;
  this.passcode=this.f['password'].value;

  this.saveObject();
        this.adminregisterservice
            .createUser(this.adminreg).subscribe(
                (data) => console.log(data),                    
                (error) => console.log(error)
            );
            this.message="Form submitted successfully";
            this.edited = true; 
          
}
saveObject() {

  this.adminreg.firstname = this.namefirst;
  this.adminreg.lastname = this.namelast;
  this.adminreg.email = this.emailId;
  this.adminreg.mobilenumber = this.mobileNum;
  this.adminreg.password = this.passcode;

  console.log('ready data: ',this.adminreg)

}
getdata() {
  this.mithresh = 'mithresh';
  this.adminregisterservice.getUserList().subscribe((data: any) => {
      console.log('Hii all');
      this.registers = data; 
  });

}
deletedata(id: any) {
  
  this.adminregisterservice.deletereg(id)
      .subscribe(
          data => {
              console.log(data);
              this.deleteMessage = true;
              this.adminregisterservice.getUserList().subscribe(data => {
                  this.registers = data
              })
          },
          error => console.log(error));
}
}
