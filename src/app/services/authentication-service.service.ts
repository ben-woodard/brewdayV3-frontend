import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpRequest } from '../interfaces/SignUpRequest';
import BASE_URL from '../URL';
import { SignInRequest } from '../interfaces/SignInRequest';
import { Observable } from 'rxjs/internal/Observable';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs/internal/observable/throwError';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { TokenRefreshResponse } from '../interfaces/TokenRefreshResponse';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {



  constructor(
    private http: HttpClient,
    private cookieService: CookieService,

  ) { }

  registerUser(signUpRequest: SignUpRequest) {
    return this.http.post<SignUpRequest>(BASE_URL + "/register", signUpRequest)
  }

  signInUser(signInRequest: SignInRequest){
    return this.http.post<any>(`${BASE_URL}/api/v1/auth/signin`, signInRequest)
  }

  refreshToken(): Observable<string> {
    const refreshToken = this.cookieService.get('refreshToken');

    if (!refreshToken) {
      return throwError(() => new Error('No refresh token available'));
    }

    return this.http.post<TokenRefreshResponse>(`${BASE_URL}/api/v1/auth/refreshtoken`, { refreshToken }).pipe(
      map(response => {
        // Save the new access token and refresh token in cookies
        this.cookieService.set('jwtToken', response.accessToken);
        this.cookieService.set('refreshToken', response.refreshToken);
        return response.accessToken;
      }),
      catchError(error => {
        // Handle errors here (e.g., log out the user)
        console.error('Error refreshing token:', error);
        return throwError(() => new Error('Failed to refresh token'));
      })
    );
  }
}
