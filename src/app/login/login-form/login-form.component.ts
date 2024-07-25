import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../../services/authentication-service.service';
import { SignInRequest } from '../../interfaces/SignInRequest';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent  implements OnInit{
  loginForm: FormGroup = new FormGroup({});

  constructor (
    private fb: FormBuilder,
    private authenticationService: AuthenticationServiceService
  ) {}

  ngOnInit(): void {

    this.loginForm =  this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    })
  }

  onSubmit() {
    if(this.loginForm.invalid) {
      console.log("Login Form is Invalid")
      return;
    }

    const loginFormValues = this.loginForm.value;

    const signInRequest = {
      email: loginFormValues.email,
      password: loginFormValues.password,
    }

    console.log(signInRequest)

    this.authenticationService.signInUser(signInRequest).subscribe(
      response => {
        console.log(response)
      },
      error => {
        console.log(error)
      }
    )
  }


}
