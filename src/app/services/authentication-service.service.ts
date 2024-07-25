import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpRequest } from '../interfaces/SignUpRequest';
import BASE_URL from '../URL';
import { SignInRequest } from '../interfaces/SignInRequest';
import { User } from '../interfaces/User';
import { Observable } from 'rxjs';

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

  signInUser(signInRequest: SignInRequest): Observable<SignInResponse> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<SignInResponse>(`${this.BASE_URL}/signin`, signInRequest, { headers });
  }
}
