import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardResponse } from '../models/card-response.model';
import { Card } from '../models/card.model';
import { GenericResponse } from '../models/generic-response.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private readonly http: HttpClient) { }

  public createCard(card: Card) {
    return this.http.post<CardResponse>(`${environment.api_endpoint}/card`, card);
  }

  public getCardsByGroup(groupId: number) {
    return this.http.get<CardResponse[]>(`${environment.api_endpoint}/card/bygroup/${groupId}`, { headers: { skip: 'true' } });
  }

  public getUserCards() {
    return this.http.get<CardResponse[]>(`${environment.api_endpoint}/card`);
  }

  public deleteCard(id: string) {
    return this.http.delete<GenericResponse>(`${environment.api_endpoint}/card/${id}`);
  }

  public getCard(id: number){
    return this.http.get<Card>(`${environment.api_endpoint}/card/${id}`);
  }

  public editCard(id: number, card: Card){
    return this.http.patch<Card>(`${environment.api_endpoint}/card/${id}`, card);
  }
}
