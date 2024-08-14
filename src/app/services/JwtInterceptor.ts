import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, switchMap, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from './authentication-service.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(
    private cookieService: CookieService,
    private authService: AuthenticationServiceService,
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtToken = this.cookieService.get('jwtToken');

    let authReq = req;
    if (jwtToken) {
      authReq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${jwtToken}`
        }
      });
    }

    return next.handle(authReq).pipe(
      catchError(err => {
        // Check if the error is an unauthorized error
        if (err instanceof HttpErrorResponse && err.status === 401) {
          // Try to refresh the token
          return this.authService.refreshToken().pipe(
            switchMap((newToken: string) => {
              // Save the new token to cookies
              this.cookieService.set('jwtToken', newToken);

              authReq = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${newToken}`
                }
              });
              return next.handle(authReq);
            }),
            catchError(refreshError => {
              this.router.navigate(['/']);
              return throwError(refreshError);
            })
          );
        }
        return throwError(err);
      })
    );
  }
}
