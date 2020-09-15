import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateCardComponent } from 'src/app/shared/components/create-card/create-card.component';
import { CreateGroupComponent } from 'src/app/shared/components/create-group/create-group.component';
import { CreateUrlComponent } from 'src/app/shared/components/create-url/create-url.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: false, autoClose: true } }]

})
export class CreateComponent  implements OnInit{

  public modalRef: BsModalRef;
  public isSignedIn: boolean;

  constructor(
    private readonly modalService: BsModalService,
  ) {
  }

  ngOnInit(){
    if (localStorage.getItem('loggedin-user')) {
      this.isSignedIn = true;
    }
  }

  public openCreateUriModal() {
    this.modalRef = this.modalService.show(CreateUrlComponent);
    this.modalRef.content.closeBtnName = 'Close';
  }

  public openCreateCardModal() {
    this.modalRef = this.modalService.show(CreateCardComponent);
    this.modalRef.content.closeBtnName = 'Close';
  }

  public openCreateGroupModal() {
    this.modalRef = this.modalService.show(CreateGroupComponent);
    this.modalRef.content.closeBtnName = 'Close';
  }

}
