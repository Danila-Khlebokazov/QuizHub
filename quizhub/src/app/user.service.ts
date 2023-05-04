import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Token} from "./models";
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
}
