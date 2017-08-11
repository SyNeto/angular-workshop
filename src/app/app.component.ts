import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "./services/auth.service";

import * as firebase from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  ngOnInit(){
    this.authService.user
      .subscribe((user: firebase.User) => {
        if(!user){
          this.router.navigate(['/login']);
        } else{
          this.router.navigate(['/']);
        }
      });
  }
}
