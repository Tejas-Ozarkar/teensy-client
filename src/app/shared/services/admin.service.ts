import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CheckAdmin } from '../models/checkadmin.model';
import { GenericResponse } from '../models/generic-response.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private readonly http: HttpClient) { }

  public getAdmins(groupId: number) {
    return this.http.get<User[]>(`${environment.api_endpoint}/group/admin/${groupId}`);
  }

  public deleteAdmin(groupId: number, userId: number) {
    return this.http.post<GenericResponse>(`${environment.api_endpoint}/group/admin/${groupId}/${userId}`, null);
  }

  public addAdmin(groupId: number, email: string) {
    return this.http.post<GenericResponse>(`${environment.api_endpoint}/group/admin/${groupId}`, { email });
  }

  public isAdmin(groupId: number): Observable<CheckAdmin>{
    return this.http.get<CheckAdmin>(`${environment.api_endpoint}/group/isadmin/${groupId}`);
  }
}
