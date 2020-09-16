import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { CreateGroupComponent } from '../shared/components/create-group/create-group.component';
import { Group } from '../shared/models/group.model';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss'],
  providers: [BsModalService]
})
export class MyGroupsComponent implements OnInit {

  public groups: Group[];
  public modalRef: BsModalRef;

  constructor(
    private readonly modalService: BsModalService,
    private readonly groupService: GroupService,
    private readonly router: Router) { }

  ngOnInit(): void {
    this.groupService.getUserGroups()
      .subscribe(groups => this.groups = groups);
  }

  public gotoGroupInfo(id: number) {
    this.router.navigateByUrl(`/group/${id}`);
  }

  public openCreateGroupModal() {
    this.modalRef = this.modalService.show(CreateGroupComponent);
    this.modalRef.content.closeBtnName = 'Close';
    this.modalService.onHide
      .pipe(take(1))
      .subscribe(() => {
        if (this.modalRef.content.newGroup) {
          this.groups.push(this.modalRef.content.newGroup);
        }
      });
  }


}
