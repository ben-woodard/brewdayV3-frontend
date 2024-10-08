import { Component, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationServiceService } from '../../services/authentication-service.service';
import { EventEmitter } from '@angular/core';
import { Authority } from '../../interfaces/Authority';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrl: './register-form.component.css'
})
export class RegisterFormComponent {
  registerForm: FormGroup = new FormGroup({});
  invalidReg: boolean = false;
  @Output() successfulReg: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private fb: FormBuilder,
    private authenticationService: AuthenticationServiceService
  ) {}

  ngOnInit(): void {

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(1)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      requestedCompanyId: ['', [Validators.required, Validators.minLength(1)]],
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


  onSubmit() {
    if (this.registerForm.invalid) {
      console.log("Login Form is Invalid")
      return;
    }

    const registerFormValues = this.registerForm.value;

    const signUpRequest = {
      email: registerFormValues.email,
      password: registerFormValues.password,
      companyId: registerFormValues.requestedCompanyId,
      firstName: registerFormValues.firstName,
      lastName: registerFormValues.lastName,
      authorities: []
    }

    console.log(signUpRequest)

    this.authenticationService.registerUser(signUpRequest).subscribe(
      response => {
        console.log(response)
        this.successfulReg.emit("Successful Registration")
        this.invalidReg = false;
      },
      error => {
        console.log(error + "There was an error registering");
        this.invalidReg = true;
      }
    )
  }

}

