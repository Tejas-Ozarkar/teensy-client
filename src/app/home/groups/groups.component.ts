import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { Group } from 'src/app/shared/models/group.model';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  public groups: Group[];
  public searchQuery: string;

  constructor(
    private readonly snackbarService: SnackbarService,
    private readonly groupService: GroupService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe(resp => {
      this.groups = resp;
    }, err => this.snackbarService.show('Something went wrong', 'danger'));
  }

  public gotoGroupInfo(id: number) {
    this.router.navigateByUrl(`/group/${id}`);
  }

}
