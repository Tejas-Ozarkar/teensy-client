import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Url } from '../models/url-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlService {

  constructor(private readonly http: HttpClient) { }

  public createTinyUrl(url: Url) {
    return this.http.post<Url>(`${environment.api_endpoint}/url`, url, { headers: { skip: 'true' } });
  }

  public getLongUrl(shortUrl: string) {
    const params = new HttpParams().set('shortUrl', shortUrl);
    return this.http.get(`${environment.api_endpoint}/url/${shortUrl}`, { headers: { skip: 'true' } });
  }
}
