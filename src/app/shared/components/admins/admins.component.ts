import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { User } from '../../models/user.model';
import { AdminService } from '../../services/admin.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.scss']
})
export class AdminsComponent implements OnInit {

  public groupId: number;
  public users: User[];
  public addAdmin: boolean;
  public email: string;

  constructor(
    public readonly adminService: AdminService,
    public modalRef: BsModalRef,
    private readonly snackbar: SnackbarService
  ) { }

  ngOnInit(): void {
    this.adminService.getAdmins(this.groupId)
      .subscribe(users => {
        this.users = users;
      });
  }

  public deleteAdmin(userId: number, i: number) {
    if (this.users.length > 1) {
      this.adminService.deleteAdmin(this.groupId, userId)
        .subscribe(resp => {
          this.users.splice(i, 1);
          this.snackbar.show(resp.message);
        });
    } else {
      this.snackbar.show('Need at least one admin', 'danger');
    }
  }

  public onAddAdmin() {
    if (!this.addAdmin) {
      this.addAdmin = true;
    } else {
      if (this.email === null) {
        this.snackbar.show('Email is required', 'danger');
        return;
      }
      this.adminService.addAdmin(this.groupId, this.email)
        .subscribe(resp => {
          this.snackbar.show(resp.message);
        });
      this.modalRef.hide();
    }
  }

}
