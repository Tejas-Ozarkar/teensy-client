import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { GenericResponse } from '../models/generic-response.model';
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private readonly http: HttpClient) { }

  public createGroup(group: Group) {
    return this.http.post<Group>(`${environment.api_endpoint}/group`, group);
  }

  public getAllGroups() {
    return this.http.get<Group[]>(`${environment.api_endpoint}/group/all`, { headers: { skip: 'true' } });
  }

  public getGroupInfo(groupId: number) {
    return this.http.get<Group>(`${environment.api_endpoint}/group/${groupId}`, { headers: { skip: 'true' } });
  }

  public getUserGroups() {
    return this.http.get<Group[]>(`${environment.api_endpoint}/group`);
  }

  public deleteGroup(id: string) {
    return this.http.delete<GenericResponse>(`${environment.api_endpoint}/group/${id}`);
  }
}
