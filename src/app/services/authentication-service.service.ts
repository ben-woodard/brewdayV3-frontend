import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpRequest } from '../interfaces/SignUpRequest';
import BASE_URL from '../URL';
import { SignInRequest } from '../interfaces/SignInRequest';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {



  constructor(
    private http: HttpClient,
  ) { }

  registerUser(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpRequest>(BASE_URL + "/register", signUpRequest)
  }

  signInUser(signInRequest: SignInRequest){
    return this.http.post<any>(`${BASE_URL}/api/v1/auth/signin`, signInRequest)
  }
}
