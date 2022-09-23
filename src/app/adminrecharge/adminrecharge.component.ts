import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Adminrecharge } from '../adminrecharge';
import { AdminrechargeService } from '../adminrecharge.service';

@Component({
  selector: 'app-adminrecharge',
  templateUrl: './adminrecharge.component.html',
  styleUrls: ['./adminrecharge.component.css']
})
export class AdminrechargeComponent implements OnInit {
  adminrecharge=new Adminrecharge();
  adminrecharges:any;
  mobilenumber:any;
  plan:any;
  cardholder:any;
  cardnumber:any;
  expiry:any;
  cvv:any;
  Sachin:any;
  deleteMess:any
  constructor(private adminrechargeService:AdminrechargeService,private router:Router) {}

  ngOnInit(): void { }
  
  paymentForm = new FormGroup({
    mobilenumber: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
    ]),
    plan: new FormControl('', [
        Validators.required,
        Validators.minLength(1),

    ]),
    cardholder: new FormControl('', [
      Validators.required,
      Validators.minLength(6),

  ]),
    cardnumber: new FormControl('', [
      Validators.required,
      Validators.minLength(12),
    ]),
    expiry: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    cvv: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
});
get c(){
  return this.paymentForm.controls;

}
submit(){
  this.mobilenumber=this.c['mobilenumber'].value;
  this.plan=this.c['plan'].value;
  this.cardholder=this.c['cardholder'].value;
  this.cardnumber=this.c['cardnumber'].value;
  this.expiry=this.c['expiry'].value;
  this.cvv=this.c['cvv'].value;


  this.saveObject();
  this.adminrechargeService.createPay(this.adminrecharge).subscribe(
    (data)=>console.log(data),
    (error)=>console.log(error)
  );
  
}
saveObject(){
  this.adminrecharge.mobilenumber=this.mobilenumber;
  this.adminrecharge.plan=this.plan;
  this.adminrecharge.cardholder=this.cardholder;
  this.adminrecharge.cardnumber=this.cardnumber;
  this.adminrecharge.expiry=this.expiry;
  this.adminrecharge.cvv=this.cvv;

  console.log('ready data: ',this.adminrecharge)
}
getdata() {
  this.Sachin = 'Sachin';
  this.adminrechargeService.getPayList().subscribe((data: any) => {
      console.log('Hii all');
      this.adminrecharges = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file
  });

}
// deletedata(id: any) {
  
//   this.adminrechargeService.deletepay(id)
//       .subscribe(
//           data => {
//               console.log(data);
//               this.deleteMess = true;
//               this.adminrechargeService.getPayList().subscribe(data => {
//                   this.adminrecharge = data
//               })
//           },
//           error => console.log(error));
// }
}
