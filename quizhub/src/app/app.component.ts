import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'quizhub';
  public islogged: boolean = false;

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.islogged = true;
    }
    else{
      this.islogged = false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.islogged = false
  }
}
