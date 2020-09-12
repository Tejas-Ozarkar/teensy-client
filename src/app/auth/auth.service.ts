import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/models/user.model';
import { Observable } from 'rxjs';
import { GenericResponse } from '../shared/models/generic-response.model';
import { AuthResponse } from '../shared/models/auth-response.model';
import { SignupUser } from '../shared/models/signup-user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) {}

  public signin(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `api/auth/signin`,
      user
    );
  }

  public signup(user: SignupUser): Observable<GenericResponse> {
    return this.http.post<GenericResponse>( `api/auth/signup`, user);
  }
}
