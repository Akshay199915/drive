import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import {HomeComponent} from "./screen/home/home.component" ;
import {AboutComponent} from "./screen/about/about.component" ;
import {LoginComponent} from "./screen/login/login.component" ;

import {FirstComponent} from "./screen/first/first.component" ;
import {SignupComponent} from "./screen/signup/signup.component" ;
import {FAQComponent} from "./screen/faq/faq.component" ;
import {ContactfComponent} from "./screen/contactf/contactf.component" ;
import {DashboardComponent} from "./screen/dashboard/dashboard.component" ;
import {ProfileComponent} from "./screen/profile/profile.component";
import {FindarideComponent} from "./screen/findaride/findaride.component";
import {ForgotComponent} from "./screen/forgot/forgot.component";
import {OfferarideComponent} from "./screen/offeraride/offeraride.component";
import { ProfileEditComponent } from './screen/profile-edit/profile-edit.component';
import { PaymentComponent } from './screen/payment/payment.component';
import { UserComponent }   from './screen/user/user.component';
import { AfterLoginComponent } from './screen/after-login/after-login.component';

import { AuthGuard } from './auth/auth.guard';
import { from } from 'rxjs';


const routes: Routes = [
 {
    path: "",
    component: HomeComponent,
    pathMatch: "full"
    
  },
  {
   path: 'after-login', component: AfterLoginComponent,
   
},
{
   path: 'user', component: UserComponent,
    
},
//{
  //  path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
//}//,
//{
    //path: '', redirectTo: '/login', pathMatch: 'full'
//},
//{
 // path: "home",
  //component: HomeComponent
 
  
//},
{
  path: "about",
  component: AboutComponent
  
},

{
  path: "profile-edit",
  component: ProfileEditComponent
  
},
{
  path: "login",
  component: LoginComponent
  
},

{
  path: "first",
  component: FirstComponent
},
{
  path: "signup",
  component: SignupComponent
},
{
  path: "payment",
  component: PaymentComponent
},
{
  path: "faq",
  component: FAQComponent
},
{
  path: "contactf",
  component: ContactfComponent
},
{
  path: "dashboard",
  component: DashboardComponent
},
{
  path: "userprofile",
  component: ProfileComponent ,canActivate: [AuthGuard]
},
{
  path:"forgot",
  component:ForgotComponent
},
{
  path:"findaride",
  component:FindarideComponent
},
{
  path:"offeraride",
  component:OfferarideComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
