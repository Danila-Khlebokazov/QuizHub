import { Component } from '@angular/core';
import {UserService} from '../user.service';
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})

export class SignInPageComponent {
  username: string = '';
  password: string = '';

  constructor(private uService: UserService, private app: AppComponent) {
  }

  login() {
    this.uService.login(this.username, this.password).subscribe((data) => {
      localStorage.setItem('token', data.access);
      this.app.islogged = true;
      this.app.getInfo();
      this.username = '';
      this.password = '';
    });
  }
  logout() {
    localStorage.removeItem('token');
    this.app.islogged = false
  }

}
