import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
import { HttpClient } from '@angular/common/http';
//import {AccountService} from "./account.service";
import {first} from "rxjs";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html' ,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
  loading = false;
  submitted = false;
  //loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    // handle form submission here
    console.log(this.loginForm.value);
    this.http.post('http://localhost:8080/login', this.loginForm.value).subscribe(
    response => {
       console.log('Post request successful:', response);
       alert("Login successful, procceding to next page.");
    },
    error => {
      console.error('Unauthorized User', error); 
      alert("Login failed. Please check your username and password and try again.");
    }
);
  }
}
