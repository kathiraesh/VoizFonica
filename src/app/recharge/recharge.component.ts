import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Recharge } from '../recharge';
import { RechargeService } from '../recharge.service';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.component.html',
  styleUrls: ['./recharge.component.css']
})
export class RechargeComponent implements OnInit {
  recharge=new Recharge();
    mobilenumber:any;
    plan:any;
    cardholder:any;
    cardnumber:any;
    expiry:any;
    cvv:any;
  Sachin:any;
  constructor(private rechargeService:RechargeService,private router:Router) {}

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
submitdata(){
  this.mobilenumber=this.c['mobilenumber'].value;
  this.plan=this.c['plan'].value;
  this.cardholder=this.c['cardholder'].value;
  this.cardnumber=this.c['cardnumber'].value;
  this.expiry=this.c['expiry'].value;
  this.cvv=this.c['cvv'].value;

  this.saveObject();
  this.rechargeService.createPay(this.recharge).subscribe(
    (data)=>{console.log(data);
    this.router.navigate(['/paymentsuccess']);
    },
    (error)=>console.log(error)
  );
  
}
saveObject(){
  this.recharge.mobilenumber=this.mobilenumber;
  this.recharge.plan=this.plan;
  this.recharge.cardholder=this.cardholder;
  this.recharge.cardnumber=this.cardnumber;
  this.recharge.expiry=this.expiry;
  this.recharge.cvv=this.cvv;

  console.log('ready data: ',this.recharge)
}
getdata() {
  this.Sachin = 'Sachin';
  this.rechargeService.getPayList().subscribe((data: any) => {
      console.log('Hii all');
      this.recharge = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file
  });

}
// deletedata(id: any) {
//   //Add some Logic here to delete the
//   this.contactService.deletecon(id)
//       .subscribe(
//           data => {
//               console.log(data);
//               this.deleteMess = true;
//               this.contactService.getConList().subscribe(data => {
//                   this.contacts = data
//               })
//           },
//           error => console.log(error));
// }
}
