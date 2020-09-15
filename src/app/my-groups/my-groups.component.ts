import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Group } from '../shared/models/group.model';
import { GroupService } from '../shared/services/group.service';

@Component({
  selector: 'app-my-groups',
  templateUrl: './my-groups.component.html',
  styleUrls: ['./my-groups.component.scss']
})
export class MyGroupsComponent implements OnInit {

  public groups: Group[];

  constructor(private readonly groupService: GroupService, private readonly router: Router) { }

  ngOnInit(): void {
    this.groupService.getUserGroups()
      .subscribe(groups => this.groups = groups);
  }

  public gotoGroupInfo(id: number) {
    this.router.navigateByUrl(`/group/${id}`);
  }

}
