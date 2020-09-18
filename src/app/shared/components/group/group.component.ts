import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { CreateCardComponent } from 'src/app/shared/components/create-card/create-card.component';
import { Card } from 'src/app/shared/models/card.model';
import { Group } from 'src/app/shared/models/group.model';
import { CardService } from 'src/app/shared/services/card.service';
import { GroupService } from 'src/app/shared/services/group.service';
import { CheckAdmin } from '../../models/checkadmin.model';
import { AdminService } from '../../services/admin.service';
import { AdminsComponent } from '../admins/admins.component';
import { EditCardComponent } from '../edit-card/edit-card.component';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
  providers: [BsModalService]
})
export class GroupComponent implements OnInit {

  public cards: Card[];
  public group: Group;
  public modalRef: BsModalRef;
  public adminModalRef: BsModalRef;
  public editModalRef: BsModalRef;
  public isAdmin: boolean;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cardService: CardService,
    private readonly groupService: GroupService,
    private readonly adminService: AdminService,
    private readonly snackbar: SnackbarService,
    private readonly modalService: BsModalService
  ) { }

  ngOnInit(): void {
    const groupId = this.route.snapshot.params.groupId;
    this.groupService.getGroupInfo(groupId)
      .subscribe(group => {
        this.group = group;
        this.cardService.getCardsByGroup(groupId)
          .subscribe(cards => {
            this.cards = cards;
            this.adminService.isAdmin(groupId)
              .subscribe(resp => {
                this.isAdmin = resp.isadmin;
              });
          });
      });
  }


  public openCreateCardModal() {
    const initialState = {
      groupId: this.route.snapshot.params.groupId
    };
    this.modalRef = this.modalService.show(CreateCardComponent, { initialState });
    this.modalRef.content.closeBtnName = 'Close';
    this.modalService.onHide
      .pipe(take(1))
      .subscribe(() => {
        if (this.modalRef.content.newCard) {
          this.cards.push(this.modalRef.content.newCard);
        }
      });
  }

  public openAdminsModal() {
    const initialState = {
      groupId: this.group.id
    };
    this.adminModalRef = this.modalService.show(AdminsComponent, { initialState });
  }

  public deleteCard(e: Event, id: string, i: number) {
    e.stopPropagation();
    this.cardService.deleteCard(id)
      .subscribe(resp => {
        this.snackbar.show(resp.message);
        this.cards.splice(i, 1);
      });
  }

  public editCard(e: Event, id: string, i: number) {
    e.stopPropagation();
    const initialState = {
      cardId: id
    };
    this.modalRef = this.modalService.show(EditCardComponent, { initialState });
    this.modalService.onHide
      .pipe(take(1))
      .subscribe(() => {
        if (this.modalRef.content.newCard) {
          this.cards.splice(i, 1);
          this.cards.splice(i, 0, this.modalRef.content.newCard);
        }
      });
  }

  public onCopyLink(e: Event, url: string) {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
  }

  public gotoLink(url: string) {
    window.open(
      url,
      '_blank'
    );
  }

  public goBack() {
    history.back();
  }

}
