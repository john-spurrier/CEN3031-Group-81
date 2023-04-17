import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _loggedIn: boolean = false;
  private _username: string = '';

  get loggedIn(): boolean {
    return this._loggedIn;
  }

  get username(): string {
    return this._username;
  }

  setLoggedIn(username: string): void {
    this._loggedIn = true;
    this._username = username;
  }

  logout(): void {
    this._loggedIn = false;
    this._username = '';
  }
}
