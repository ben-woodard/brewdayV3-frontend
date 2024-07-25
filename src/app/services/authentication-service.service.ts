import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpRequest } from '../interfaces/SignUpRequest';
import BASE_URL from '../URL';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {



  constructor(
    private http: HttpClient,
  ) { }

  registerUser(signUpRequest: SignUpRequest){
    return this.http.post<SignUpRequest>(BASE_URL + "/register", signUpRequest)
  }
}
