import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../../services/authentication-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../../services/user-service.service';
import { CookieService } from 'ngx-cookie-service';
import { Authority } from '../../interfaces/Authority';
import { CompanyServiceService } from '../../services/company-service.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent  implements OnInit{
  loginForm: FormGroup = new FormGroup({});
  invalidLogin: Boolean = false;


  constructor (
    private fb: FormBuilder,
    private authenticationService: AuthenticationServiceService,
    private router: Router,
    private userService: UserServiceService,
    private cookieService: CookieService,
    private companyService: CompanyServiceService,
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

    this.invalidLogin = false;

    const loginFormValues = this.loginForm.value;

    const signInRequest = {
      email: loginFormValues.email,
      password: loginFormValues.password
    }

    this.authenticationService.signInUser(signInRequest).subscribe(
      response => {
        this.userService.setUser(response.user);
        this.companyService.setCompany(response.company)
        this.cookieService.set('accessCookie', response.accessCookie.value)
        this.cookieService.set('refreshCookie', response.refreshCookie.value)
        this.cookieService.set('jwtToken', response.jwtToken)

        const hasSuperAuthority = response.user.authorities.some(
          (authority: Authority) => authority.authority === 'SUPER'
        );

        if (hasSuperAuthority) {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['/home']);
        }
      },
      error => {
        this.invalidLogin = true;
        console.log(error)
        console.log("No user found with these credentials")
      }
    )
  }


}
