import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { CreateCardComponent } from 'src/app/shared/components/create-card/create-card.component';
import { Card } from 'src/app/shared/models/card.model';
import { Group } from 'src/app/shared/models/group.model';
import { CardService } from 'src/app/shared/services/card.service';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {

  public cards: Card[];
  public group: Group;
  public modalRef: BsModalRef;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly cardService: CardService,
    private readonly groupService: GroupService,
    private readonly modalService: BsModalService
  ) { }

  ngOnInit(): void {
    const groupId = this.route.snapshot.params.groupId;
    this.groupService.getGroupInfo(groupId)
      .subscribe(group => {
        this.group = group;
        this.cardService.getCardsByGroup(groupId)
          .subscribe(cards => this.cards = cards);
      })
  }

  
  public openCreateCardModal() {
    const initialState = {
      groupId: this.route.snapshot.params.groupId
    }
    this.modalRef = this.modalService.show(CreateCardComponent, {initialState});
    this.modalService.onHide
    this.modalRef.content.closeBtnName = 'Close';
    this.modalService.onHide
    .pipe(take(1))
    .subscribe(() => {
       this.cards.push(this.modalRef.content.newGroup);
    });
  }

  public onCopyLink(url: string){
    navigator.clipboard.writeText(url);
  }

}
