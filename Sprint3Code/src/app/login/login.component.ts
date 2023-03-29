import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";
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
  constructor(private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {}

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

  }
}
