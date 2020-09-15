import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './shared/services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private readonly userService: UserService,
    private readonly router: Router
  ) { }

  ngOnInit() {
    this.userService.getUserInfo()
      .subscribe(user => {
        console.log(user);
      }, err => {
        console.log(err);
        localStorage.clear();
        // this.router.navigateByUrl('/auth/signin');
      });
  }
}
