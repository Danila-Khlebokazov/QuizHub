import { Component } from '@angular/core';
import {UserService} from "../user.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private uService: UserService) {
  }

}
