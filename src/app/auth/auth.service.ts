import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../shared/models/user.model';
import { Observable } from 'rxjs';
import { GenericResponse } from '../shared/models/generic-response.model';
import { AuthResponse } from '../shared/models/auth-response.model';
import { SignupUser } from '../shared/models/signup-user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private readonly http: HttpClient) { }

  public signin(user: User): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(
      `${environment.api_endpoint}/auth/signin`,
      user,
      { headers: { skip: 'true' } }
    );
  }

  public signup(user: SignupUser): Observable<GenericResponse> {
    return this.http.post<GenericResponse>(`${environment.api_endpoint}/auth/signup`, user, { headers: { skip: 'true' } });
  }
}
