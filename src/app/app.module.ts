import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RechargeComponent } from './recharge/recharge.component';
import { DongleComponent } from './dongle/dongle.component';
import { SimcardComponent } from './simcard/simcard.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CareerComponent } from './career/career.component';
import { AboutComponent } from './about/about.component';
import { PortvoizComponent } from './portvoiz/portvoiz.component';
import { ContactComponent } from './contact/contact.component';
import { VenerateComponent } from './venerate/venerate.component';
import { AdminComponent } from './admin/admin.component';
import { PromotionComponent } from './promotion/promotion.component';
import { TermsComponent } from './terms/terms.component';
import { ServiceComponent } from './service/service.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { AdminprepaidComponent } from './adminprepaid/adminprepaid.component';
import { AdminpostpaidComponent } from './adminpostpaid/adminpostpaid.component';
import { AdmindongleComponent } from './admindongle/admindongle.component';
import { ReportsComponent } from './reports/reports.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { AdminrechargeComponent } from './adminrecharge/adminrecharge.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PostpaidComponent,
    PrepaidComponent,
    LoginComponent,
    RegisterComponent,
    RechargeComponent,
    DongleComponent,
    SimcardComponent,
    ContactComponent,
    PortvoizComponent,
    FooterComponent,
    CareerComponent,
    AboutComponent,
    PortvoizComponent,
    ContactComponent,
    VenerateComponent,
    AdminComponent,
    PromotionComponent,
    TermsComponent,
    ServiceComponent,
    DataprotectionComponent,
    AdminregisterComponent,
    AdminprepaidComponent,
    AdminpostpaidComponent,
    AdmindongleComponent,
    ReportsComponent,
    PaymentsuccessComponent,
    AdminrechargeComponent,
    AdminloginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,

    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
