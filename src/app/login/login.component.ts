import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginFormVisible: Boolean = false;

  toggleLoginForm() {
    this.loginFormVisible = !this.loginFormVisible
  }

  successfulRegistration(string : string){
    console.log(string);
    if(!this.loginFormVisible){
      this.loginFormVisible = true;
    }
  }

}
