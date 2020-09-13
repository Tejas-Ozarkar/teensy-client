import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../models/url-model';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private readonly http: HttpClient) { }

  public createTinyUrl(url: Url) {
    return this.http.post<Url>(`/api/url`, url);
  }

  public getLongUrl(shortUrl: string) {
    const params = new HttpParams().set('shortUrl', shortUrl);
    return this.http.get(`/api/url/${shortUrl}`);
  }
}
