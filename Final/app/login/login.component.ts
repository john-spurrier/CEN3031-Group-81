import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
//import {AccountService} from "./account.service";
import {first} from "rxjs";
import { AuthService } from 'app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html' ,
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm!:FormGroup;
  loading = false;
  submitted = false;
  loggedIn = false;
  username: string = '';
  errorMessage: string = '';
  

  //loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
      this.submitted = true;
      if (this.loginForm.invalid) {
        return;
      }
      this.loading = true;
      /*this.accountService.register(this.loginForm.value)
      .pipe(first())
      .subscribe({
        next: () => {
          this.router.navigate(['./login.component'], { relativeTo: this.route });
        },
        error: error => {
          this.loading = false;
        }
      });*/
    console.log(this.loginForm.value);
    this.authService.setLoggedIn(this.submitted, this.loginForm.value.username);
      this.errorMessage = '';
      this.loggedIn = this.authService.isLoggedIn;
      // Navigate to the homepage after successful login
      this.router.navigate([''])
      window.location.href = '';
      window.onload = function(){
          location.reload();
      }
      ;
      
    

  }
}
