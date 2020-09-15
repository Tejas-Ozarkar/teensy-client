import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../models/url-model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private readonly http: HttpClient) { }

    public getUserInfo() {
        return this.http.get(`${environment.api_endpoint}/auth/user`);
    }

}
