import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Group } from '../../models/group.model';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.scss']
})
export class CreateGroupComponent {

  public group: Group;

  constructor(
    public modalRef: BsModalRef,
    private readonly groupService: GroupService) {
    this.group = new Group();
  }

  public createGroup() {
    this.groupService.createGroup(this.group)
      .subscribe(resp => console.log(resp));
    this.modalRef.hide();
  }

}
