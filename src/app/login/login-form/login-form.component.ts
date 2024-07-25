import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../../services/authentication-service.service';
import { SignUpRequest } from '../../interfaces/SignUpRequest';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent  implements OnInit{
  loginAttempt: Boolean = false;
  loginForm: FormGroup = new FormGroup({});

  constructor (
    private fb: FormBuilder,
    private authenticationService: AuthenticationServiceService
  ) {


  }

  ngOnInit(): void {

    this.loginForm =  this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      companyName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(5)]]
    }, {
      // validator:  this.passwordMatchValidator
    })


  }

  // passwordMatchValidator(control: AbstractControl) {
  //   return control.get('password')?.value=== control.get('confirmPassword')?.value
  //   ? null : {mismatch : true}
  // }

  toggleLoginAttempt() {
    this.loginAttempt = !this.loginAttempt
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      console.log("Login Form is Invalid")
      return;
    }

    const loginFormValues = this.loginForm.value;

    const signUpRequest = {
      email: loginFormValues.email,
      password: loginFormValues.password,
      firstName: loginFormValues.firstName,
      lastName: loginFormValues.lastName
    }

    this.authenticationService.registerUser(signUpRequest).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }


}
