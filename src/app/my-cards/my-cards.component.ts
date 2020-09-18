import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { CreateCardComponent } from '../shared/components/create-card/create-card.component';
import { SnackbarService } from '../shared/components/snackbar/snackbar.service';
import { CardResponse } from '../shared/models/card-response.model';
import { CardService } from '../shared/services/card.service';

@Component({
  selector: 'app-my-cards',
  templateUrl: './my-cards.component.html',
  styleUrls: ['./my-cards.component.scss'],
  providers: [BsModalService]
})
export class MyCardsComponent implements OnInit {

  public cards: CardResponse[];
  public modalRef: BsModalRef;

  constructor(
    private readonly snackbar: SnackbarService,
    private readonly modalService: BsModalService,
    private readonly cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getUserCards()
      .subscribe(cards => this.cards = cards);
  }


  public openCreateCardModal() {
    this.modalRef = this.modalService.show(CreateCardComponent);
    this.modalRef.content.closeBtnName = 'Close';
    this.modalService.onHide
      .pipe(take(1))
      .subscribe(() => {
        if (this.modalRef.content.newCard) {
          this.cards.push(this.modalRef.content.newCard);
        }
      });
  }

  public onCopyLink(e: Event, url: string) {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    this.snackbar.show('Link copied to clipboard');
  }

  public gotoLink(url: string) {
    window.open(
      url,
      '_blank'
    );
  }

  public deleteCard(e: Event, id: string, i: number) {
    e.stopPropagation();
    this.cardService.deleteCard(id)
      .subscribe(resp => {
        this.snackbar.show(resp.message);
        this.cards.splice(i, 1);
      });
  }
}
