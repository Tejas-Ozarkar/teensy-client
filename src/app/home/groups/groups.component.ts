import { Component, OnInit } from '@angular/core';
import { Group } from 'src/app/shared/models/group.model';
import { GroupService } from 'src/app/shared/services/group.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  public groups: Group[];

  constructor(
    private readonly groupService: GroupService
  ) { }

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe(resp => {
      this.groups = resp;
    });
  }

}
