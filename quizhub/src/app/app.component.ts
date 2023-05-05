import {Component, OnInit} from '@angular/core';
import {User} from "./models";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'quizhub';
  public islogged: boolean = false;
  constructor(private uService: UserService) {
  }
  firstname: string = ''
  lastname: string = ''
  username: string = ''

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.islogged = true;
      this.getInfo();
    }
    else{
      this.islogged = false;
    }
  }

  getInfo(){
    this.uService.getSelfInfo().subscribe((user) => {
      localStorage.setItem("username", user.username);
      localStorage.setItem("first_name", user.first_name);
      localStorage.setItem("last_name", user.last_name);
      this.firstname = user.first_name;
      this.lastname = user.last_name;
      this.username = user.username;
    })
  }

  logout() {
    localStorage.clear();
    this.islogged = false
  }
}
