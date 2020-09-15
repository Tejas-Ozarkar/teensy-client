import { Component, OnInit } from '@angular/core';
import { CardResponse } from '../shared/models/card-response.model';
import { CardService } from '../shared/services/card.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss']
})
export class MyCardsComponent implements OnInit {

  public cards: CardResponse[];

  constructor(private readonly cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getUserCards()
      .subscribe(cards => this.cards = cards);
  }

}
