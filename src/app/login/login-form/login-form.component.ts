import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent  implements OnInit{
  loginForm: FormGroup = new FormGroup({});

  constructor (
    private fb: FormBuilder,
  ) {


  }

  ngOnInit(): void {

    this.loginForm =  this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      companyName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      confirmPassword: ['', Validators.required, Validators.minLength(5)]
    }, {
      validator:  this.passwordMatchValidator
    })


  }

  passwordMatchValidator(control: AbstractControl) {
    return control.get('password')?.value=== control.get('confirmPassword')?.value
    ? null : {mismatch : true}
  }

  onSubmit() {

  }


}
