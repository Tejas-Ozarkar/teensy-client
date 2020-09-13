import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent {

  public card: Card;

  constructor(public modalRef: BsModalRef,
    private readonly cardService: CardService) {
    this.card = new Card();
  }

  public createCard() {
    this.cardService.createCard(this.card)
      .subscribe(resp => console.log(resp));
    this.modalRef.hide();
  }

}
