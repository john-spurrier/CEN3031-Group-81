import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Injectable } from "@angular/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./HomePage/HomePage.component.css'],
  providers: [AuthService]
})
export class AppComponent {
  title = 'SelfGrow';
  isLoggedIn = false;
  username: string = '';
  constructor(private authservice: AuthService){
    this.isLoggedIn = this.authservice.isLoggedIn;
    this.username = this.authservice.username;
  }

  setLogout(){
    this.authservice.setLogout();
    this.isLoggedIn = false;
    this.username = '';
  }
}