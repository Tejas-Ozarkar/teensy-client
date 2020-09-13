import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { AuthResponse } from '../models/auth-response.model';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const userDetails = JSON.parse(localStorage.getItem('loggedin-user')) as AuthResponse;
    if (request.headers.get('skip')) {
      return next.handle(request);
    }
    const AuthToken = userDetails.jwt;

    request = request.clone({
      setHeaders: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${AuthToken}`,
      },
    });
    return next.handle(request);
  }

}
