import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact=new Contact();
  name:any;
  email:any;
  message:any;
  contacts: any;
  kathir: any;
  deleteMess: any;

  constructor(private contactService:ContactService,private router:Router) {}

  ngOnInit(): void { }
  
  contactForm = new FormGroup({
    name: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
    ]),
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(10),

    ]),
    message: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
});
get c(){
  return this.contactForm.controls;

}
submit(){
  this.name=this.c['name'].value;
  this.email=this.c['email'].value;
  this.message=this.c['message'].value;

  this.saveObject();
  this.contactService
  .createCon(this.contact).subscribe(
    (data)=>{alert("Strive for continuous improvement, instead of perfection.              THANK YOU!");this.router.navigate(['/contact'])},
    (error)=>console.log(error)
  );
  
}
saveObject(){
  this.contact.name=this.name;
  this.contact.email=this.email;
  this.contact.message=this.message;

  console.log('ready data: ',this.contact)
}
getdata() {
  this.kathir = 'kathir';
  this.contactService.getConList().subscribe((data: any) => {
      console.log('Hii all');
      this.contacts = data; // we are pulled data from backend to the UI inside TS file and taken on HTML file
  });

}
deletedata(id: any) {
  //Add some Logic here to delete the
  this.contactService.deletecon(id)
      .subscribe(
          data => {
              console.log(data);
              this.deleteMess = true;
              this.contactService.getConList().subscribe(data => {
                  this.contacts = data
              })
          },
          error => console.log(error));
}
}
