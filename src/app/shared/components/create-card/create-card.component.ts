import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.scss']
})
export class CreateCardComponent {

  public card: Card;
  public newCard: object;

  public groupId: number;

  constructor(
    private readonly snackbar: SnackbarService,
    public modalRef: BsModalRef,
    private readonly cardService: CardService) {
    this.card = new Card();
  }

  public createCard() {
    if (this.card.longurl.startsWith('http://') || this.card.longurl.startsWith('https://')) {

      this.card.groupid = this.groupId;
      this.cardService.createCard(this.card)
        .subscribe(resp => this.newCard = resp);
      this.modalRef.hide();
    }else{
      this.snackbar.show('Invalid Url', 'danger');
    }
  }

}
