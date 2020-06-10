import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {APP_BASE_HREF} from '@angular/common';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './screen/first/first.component';
import { HomeComponent } from './screen/home/home.component';
import { AboutComponent } from './screen/about/about.component';


import { HeaderComponent } from './shared/header/header.component';

import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LoginComponent } from './screen/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './screen/signup/signup.component';
import { FAQComponent } from './screen/faq/faq.component';
import { ContactfComponent } from './screen/contactf/contactf.component';
import { DsidebarComponent } from './shared/dsidebar/dsidebar.component';
import { ReportboxComponent } from './shared/reportbox/reportbox.component';
import { DashboardComponent } from './screen/dashboard/dashboard.component';
import { ProfileComponent } from './screen/profile/profile.component';
import { FindarideComponent } from './screen/findaride/findaride.component';
import { OfferarideComponent } from './screen/offeraride/offeraride.component';
import { ForgotComponent } from './screen/forgot/forgot.component';
import { ProfileEditComponent } from './screen/profile-edit/profile-edit.component';
import { PaymentComponent } from './screen/payment/payment.component';
import { UserComponent } from './screen/user/user.component';



import { UserService } from './sharedd/user.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { AfterLoginComponent } from './screen/after-login/after-login.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    HomeComponent,
    AboutComponent,
    
    HeaderComponent,
    
    SidebarComponent,
    LoginComponent,
    FooterComponent,
    SignupComponent,
    FAQComponent,
    ContactfComponent,
    DsidebarComponent,
    ReportboxComponent,
    DashboardComponent,
    ProfileComponent,
    FindarideComponent,
    OfferarideComponent,
    ForgotComponent,
    ProfileEditComponent,
    PaymentComponent,
    UserComponent,
    AfterLoginComponent,
   
    
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    GooglePlaceModule,
    HttpClientModule,
   
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor,
    multi: true},
  AuthGuard,UserService
 ],
  bootstrap: [AppComponent]
})
export class AppModule { }
