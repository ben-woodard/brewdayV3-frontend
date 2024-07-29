import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../../services/authentication-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent  implements OnInit{
  loginForm: FormGroup = new FormGroup({});
  invalidLogin: Boolean = false;
  loginSuccess: Boolean = false;

  constructor (
    private fb: FormBuilder,
    private authenticationService: AuthenticationServiceService,
    private router: Router
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
      password: loginFormValues.password
    }

    this.authenticationService.signInUser(signInRequest).subscribe(
      response => {
        this.loginSuccess = true;
        this.invalidLogin = false;
        console.log(response)
        this.router.navigate(['/home']);
      },
      error => {
        this.loginSuccess = false;
        this.invalidLogin = true;
        console.log(error)
        console.log("No user found with these credentials")
      },
      () => {}
    )
  }


}
