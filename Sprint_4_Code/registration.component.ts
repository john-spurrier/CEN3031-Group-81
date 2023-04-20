import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    package1: false,
    package2: false,
    package3: false
  };
  

  constructor(private formBuilder: FormBuilder, private http : HttpClient, private router: Router) {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  onSubmit() {
   var address = 'http://localhost:8080/user/' + this.user.username + "/" + this.user.email
    this.http.post(address, this.user).subscribe(
        response => {
         console.log('Post request successful:', response);
         alert("Registration successful, procceding to next page.");
         this.router.navigate(['login'])
      },
      error => {
        console.error('Unauthorized user', error); 
        alert("Registration unsuccessful, please renter credentials" + error);
      }
  );
    if (this.user.password !== this.user.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    console.log(this.user);
  }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
}
