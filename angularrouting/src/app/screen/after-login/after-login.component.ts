import { Component, OnInit } from '@angular/core';
import { UserService } from '../../sharedd/user.service'
import { Router } from "@angular/router";
@Component({
  selector: 'app-after-login',
  templateUrl: './after-login.component.html',
  styleUrls: ['./after-login.component.css']
})
export class AfterLoginComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

}
