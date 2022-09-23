import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Reports } from '../reports';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  reports=new Reports()
  messagecon: any;
  emailcon: any;
  namecon: any;
  contacts: any;
  mithresh: any;
  deleteMess: any;

  constructor(private reportService:ReportsService, private router:Router) { }

  ngOnInit(): void { }

  contactForm = new FormGroup({
    name: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.minLength(20),

  ]), 
  message: new FormControl('', [
    Validators.required,
    Validators.minLength(10),

  ]),
});
get f(){
  return this.contactForm.controls;

}
submit(){
  this.namecon=this.f['name'].value;
  this.emailcon=this.f['email'].value;
  this.messagecon=this.f['message'].value;
  

  this.saveObject();
        this.reportService
            .createCon(this.reports).subscribe(
                (data) => console.log(data),                    
                (error) => console.log(error)
            );
          
}
saveObject() {
  this.reports.name = this.namecon;
  this.reports.email = this.emailcon;
  this.reports.message = this.messagecon;

  console.log('ready data: ',this.reports)

}
getdata() {
  this.mithresh = 'mithresh';
  this.reportService.getConList().subscribe((data: any) => {
      console.log('Hii all');
      this.contacts = data; 
  });

}
deletedata(id: any) {
  
  this.reportService.deleteCon(id)
      .subscribe(
          data => {
              console.log(data);
              this.deleteMess = true;
              this.reportService.getConList().subscribe(data => {
                  this.contacts = data
              })
          },
          error => console.log(error));
}
}
