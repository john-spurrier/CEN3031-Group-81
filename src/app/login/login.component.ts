import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http : HttpClient) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    // handle form submission here
    console.log(this.loginForm.value);
    this.http.post('http://localhost:8080/user/{name}/{email}', this.loginForm.value).subscribe(
    response => {
       console.log('Post request successful:', response);
    },
    error => {
      console.error('Post request failed:', error);
    }
);
  }
}