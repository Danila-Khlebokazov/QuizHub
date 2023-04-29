import { Component } from '@angular/core';
import {User} from "./models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quizhub';
  islogin = false;
  user: User = {userId: 1234, userName: "TestUser", quizzes: [], favourites: [], image: undefined}
}
