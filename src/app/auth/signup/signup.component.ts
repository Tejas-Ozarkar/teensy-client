import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user.model';
import { SignupUser } from 'src/app/shared/models/signup-user.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  public signupUser: SignupUser;

  constructor(private readonly authService: AuthService) {
    this.signupUser = new SignupUser();
  }

  public signup() {
    this.authService.signup(this.signupUser).subscribe((resp) => {
      console.log(resp);
    });
  }
}
