import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { AdmindongleComponent } from './admindongle/admindongle.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminpostpaidComponent } from './adminpostpaid/adminpostpaid.component';
import { AdminprepaidComponent } from './adminprepaid/adminprepaid.component';
import { AdminrechargeComponent } from './adminrecharge/adminrecharge.component';
import { AdminregisterComponent } from './adminregister/adminregister.component';
import { CareerComponent } from './career/career.component';
import { ContactComponent } from './contact/contact.component';
import { DataprotectionComponent } from './dataprotection/dataprotection.component';
import { DongleComponent } from './dongle/dongle.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './login/auth.guard';
import { LoginComponent } from './login/login.component';
import { PaymentsuccessComponent } from './paymentsuccess/paymentsuccess.component';
import { PortvoizComponent } from './portvoiz/portvoiz.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PromotionComponent } from './promotion/promotion.component';
import { RechargeComponent } from './recharge/recharge.component';
import { RegisterComponent } from './register/register.component';
import { ReportsComponent } from './reports/reports.component';
import { ServiceComponent } from './service/service.component';
import { SimcardComponent } from './simcard/simcard.component';
import { TermsComponent } from './terms/terms.component';
import { VenerateComponent } from './venerate/venerate.component';



const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'postpaid', component:PostpaidComponent},
  {path:'prepaid', component:PrepaidComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent},
  {path:'recharge', component:RechargeComponent,canActivate:[AuthGuard]},
  {path:'dongle', component:DongleComponent},
  {path:'simcard', component:SimcardComponent},
  {path:'footer', component:FooterComponent},
  {path:'contact', component:ContactComponent,canActivate:[AuthGuard]},
  {path:'portvoiz', component:PortvoizComponent,canActivate:[AuthGuard]},
  {path:'about', component:AboutComponent},
  {path:'venerate', component:VenerateComponent},
  {path:'career', component:CareerComponent},
  {path:'admin', component:AdminComponent,canActivate:[AuthGuard]},
  {path:'promotion', component:PromotionComponent},
  {path:'terms', component:TermsComponent},
  {path:'service', component:ServiceComponent},
  {path:'dataprotection', component:DataprotectionComponent},
  {path:'adminregister', component:AdminregisterComponent,canActivate:[AuthGuard]},
  {path:'reports', component:ReportsComponent,canActivate:[AuthGuard]},
  {path:'adminprepaid', component:AdminprepaidComponent,canActivate:[AuthGuard]},
  {path:'adminpostpaid', component:AdminpostpaidComponent,canActivate:[AuthGuard]},
  {path:'admindongle', component:AdmindongleComponent,canActivate:[AuthGuard]},
  {path:'paymentsuccess', component:PaymentsuccessComponent},
  {path:'adminrecharge', component:AdminrechargeComponent,canActivate:[AuthGuard]},
  {path:'adminlogin', component:AdminloginComponent},

  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
