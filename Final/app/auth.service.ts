import { Injectable } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly STORAGE_KEY = 'isLoggedin';
  private readonly NAME_KEY = 'username';
  isLoggedIn = false;
  username:string = '';

  constructor(){
    const storedVal = localStorage.getItem(this.STORAGE_KEY);
    const storedName = localStorage.getItem(this.NAME_KEY)
    if (storedVal){
      this.isLoggedIn = JSON.parse(storedVal);
      this.username = JSON.stringify(storedName);
    }


  }

  setLoggedIn(value: boolean, username:string){

    this.isLoggedIn = value;
    this.username = username;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(value));
    localStorage.setItem(this.NAME_KEY, username);
  }
  setLogout(){
    this.isLoggedIn = false;
    this.username = '';
    localStorage.removeItem(this.STORAGE_KEY);
    localStorage.removeItem(this.NAME_KEY);
  }
}
