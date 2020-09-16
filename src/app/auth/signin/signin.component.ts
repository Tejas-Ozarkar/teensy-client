import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { User } from 'src/app/shared/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public user: User;

  constructor(
    private readonly router: Router,
    private readonly authService: AuthService) {
    this.user = new User();
  }

  ngOnInit(): void { }

  public signIn(): void {
    this.authService.signin(this.user).subscribe(
      (resp) => {
        localStorage.setItem('loggedin-user', JSON.stringify(resp));
        window.location.href = '/';

      },
      (err) => {
        localStorage.removeItem('loggedin-user');
      }
    );
  }
}
