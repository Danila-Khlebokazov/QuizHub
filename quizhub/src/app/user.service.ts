import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Token, User} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) { }

  login(username: string, password: string): Observable<Token> {
    return this.client.post<Token>(
      `${this.BASE_URL}/api/login/`,
      {username, password}
    )
  }

  refresh_token(){
    const refresh = localStorage.getItem("refresh_token")
    return this.client.post<Token>(
      `${this.BASE_URL}/api/login/refresh/`,
      {refresh}
    ).subscribe((data)=>{
        localStorage.setItem("token", data.access)
        console.log(data.access)
    },
      (error) => {
        console.log(error)
        localStorage.clear();
      })
  }

  getUser(username: string): Observable<User>{
    return this.client.get<User>(
      `${this.BASE_URL}/api/${username}/`
    )
  }

  getSelfInfo(): Observable<User>{
    return this.client.get<User>(
      `${this.BASE_URL}/api/me/`
    )
  }
}
