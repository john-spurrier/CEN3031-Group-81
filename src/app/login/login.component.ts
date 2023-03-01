import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  template: 
  `<h1>Login Page</h1>
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <div>
        <label for="username">Username:</label>
        <input type="text" id="username" formControlName="username">
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" formControlName="password">
      </div>
      <button type="submit" [disabled]="!loginForm.valid">Login</button>
    </form>
    <button (click)="goToOtherPage()">Home Page</button>
  `,
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private auth: AuthService) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    // handle form submission here
    console.log(this.loginForm.value);
    const { username, password } = this.loginForm.value;
    this.auth.login(username, password).subscribe(
      () => console.log('Login successful'),
      error => console.error(error)
    );
  }

  goToOtherPage() {
    this.router.navigateByUrl('https://www.youtube.com/');
  }

}
