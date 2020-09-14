import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CardResponse } from '../models/card-response.model';
import { Card } from '../models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private readonly http: HttpClient) { }

  public createCard(card: Card){
    return this.http.post<CardResponse>(`/api/card`, card);
  }

  public getCardsByGroup(groupId: number){
    return this.http.get<CardResponse[]>(`/api/card/${groupId}`);
  }
}
