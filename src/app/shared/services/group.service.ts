import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '../models/group.model';

@Injectable({
  providedIn: 'root'
})
export class GroupService {

  constructor(private readonly http: HttpClient) { }

  public createGroup(group: Group){
    return this.http.post<Group>(`/api/group`, group);
  }

  public getAllGroups(){
    return this.http.get<Group[]>(`/api/group/all`);
  }
}
