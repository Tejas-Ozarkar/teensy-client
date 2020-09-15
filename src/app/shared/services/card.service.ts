import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardResponse } from '../models/card-response.model';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private readonly http: HttpClient) { }

  public createCard(card: Card){
    return this.http.post<CardResponse>(`${environment.api_endpoint}/card`, card);
  }

  public getCardsByGroup(groupId: number){
    return this.http.get<CardResponse[]>(`${environment.api_endpoint}/card/${groupId}`);
  }

  public getUserCards(){
    return this.http.get<CardResponse[]>(`${environment.api_endpoint}/card`);
  }
}
