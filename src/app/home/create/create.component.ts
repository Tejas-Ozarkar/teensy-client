import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CreateCardComponent } from 'src/app/shared/components/create-card/create-card.component';
import { CreateGroupComponent } from 'src/app/shared/components/create-group/create-group.component';
import { CreateUrlComponent } from 'src/app/shared/components/create-url/create-url.component';
import { Url } from 'src/app/shared/models/url-model';
import { UrlService } from 'src/app/shared/services/url.service';
 
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: false, autoClose: true } }]

})
export class CreateComponent {

  public modalRef: BsModalRef;

  constructor(
    private readonly modalService: BsModalService,
    ) {
  }
 
  public openCreateUriModal(){
    this.modalRef = this.modalService.show(CreateUrlComponent);
    this.modalRef.content.closeBtnName = 'Close';
  } 

  public openCreateCardModal(){
    this.modalRef = this.modalService.show(CreateCardComponent);
    this.modalRef.content.closeBtnName = 'Close';
  }

  public openCreateGroupModal(){
    this.modalRef = this.modalService.show(CreateGroupComponent);
    this.modalRef.content.closeBtnName = 'Close';
  }

  
}
