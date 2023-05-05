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
  password2: string = '';

  first_name: string = '';
  last_name: string = '';
  error_message: string = "";

  constructor(private uService: UserService) {
  }

  signup(){
    this.uService.register(this.username, this.email, this.password, this.password2, this.first_name, this.last_name,).subscribe(

    )
    this.username = '';
    this.email = '';
    this.password = '';
    this.password2 = '';
    this.first_name = '';
    this.last_name = '';
    this.error_message = "";
  }

}
