
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { UserService } from '../../sharedd/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  constructor(public userService: UserService,private router : Router) 
    {}
    model ={
      email :'',
      password:''
    };
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    serverErrorMessages: string;
    
  
    
   
  ngOnInit(): void {
    if(this.userService.isLoggedIn())
    this.router.navigateByUrl('/afterlogin');
    }
    onSubmit(form : NgForm){
      this.userService.login(form.value).subscribe(
        res => {
          this.userService.setToken(res['token']);
          this.router.navigateByUrl('/after-login');
        },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
      }
  

}
