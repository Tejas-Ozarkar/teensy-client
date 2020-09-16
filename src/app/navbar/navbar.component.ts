import { Component, OnInit } from '@angular/core';
import { BsDropdownConfig } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [{ provide: BsDropdownConfig, useValue: { isAnimated: false, autoClose: true } }]
})
export class NavbarComponent implements OnInit {

  public isSignedIn: boolean;

  constructor() {
    this.isSignedIn = false;
  }

  ngOnInit(): void {
    if (localStorage.getItem('loggedin-user')) {
      this.isSignedIn = true;
    }
  }

  public logout() {
    localStorage.clear();
    window.location.href = '/';
  }

}
