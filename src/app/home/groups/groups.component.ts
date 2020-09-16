import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private readonly groupService: GroupService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.groupService.getAllGroups().subscribe(resp => {
      this.groups = resp;
    });
  }

  public gotoGroupInfo(id: number) {
    this.router.navigateByUrl(`/group/${id}`);
  }

}
