import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { SignupUser } from 'src/app/shared/models/signup-user.model';
import { AuthService } from '../auth.service';
import { SnackbarService } from 'src/app/shared/components/snackbar/snackbar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public signupUser: SignupUser;

  constructor(
    private readonly router: Router,
    private readonly snackbar: SnackbarService,
    private readonly authService: AuthService) {
    this.signupUser = new SignupUser();
  }

  public signup() {
    this.authService.signup(this.signupUser).subscribe((resp) => {
      this.snackbar.show('Signup successful');
      this.router.navigateByUrl('/auth/signin');
    });
  }
}
