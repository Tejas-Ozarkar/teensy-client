import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Card } from '../../models/card.model';
import { CardService } from '../../services/card.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.scss']
})
export class EditCardComponent implements OnInit {

  public card: Card;
  public newCard: object;
  public cardId: number;

  constructor(
    private readonly snackbar: SnackbarService,
    public modalRef: BsModalRef,
    private readonly cardService: CardService) {
    this.card = new Card();
  }

  ngOnInit(): void {
    this.cardService.getCard(this.cardId)
      .subscribe(card => this.card = card);
  }

  public editCard() {
    if (this.card.longurl.startsWith('http://') || this.card.longurl.startsWith('https://')) {

      this.cardService.editCard(this.cardId, this.card)
        .subscribe(resp => this.newCard = resp);
      this.modalRef.hide();
    } else {
      this.snackbar.show('Invalid Url', 'danger');
    }
  }
}
