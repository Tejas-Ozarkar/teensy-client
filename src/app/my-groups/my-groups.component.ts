import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';
import { AdminsComponent } from '../shared/components/admins/admins.component';
import { CreateGroupComponent } from '../shared/components/create-group/create-group.component';
import { SnackbarService } from '../shared/components/snackbar/snackbar.service';
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
  public groupModalRef: BsModalRef;

  constructor(
    private readonly snackbar: SnackbarService,
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
    this.groupModalRef = this.modalService.show(CreateGroupComponent);
    this.modalService.onHide
      .pipe(take(1))
      .subscribe(() => {
        if (this.groupModalRef.content.newGroup) {
          this.groups.push(this.groupModalRef.content.newGroup);
        }
      });
  }

  public deleteGroup(e: Event, id: string, i: number) {
    e.stopPropagation();
    this.groupService.deleteGroup(id)
      .subscribe(resp => {
        this.snackbar.show(resp.message);
        this.groups.splice(i, 1);
      });
  }

}
