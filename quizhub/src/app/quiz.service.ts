import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Token, Quiz} from "./models";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) { }

  getQuizzes(): Observable<Quiz[]>{
    return this.client.get<Quiz[]>(
      `${this.BASE_URL}/api/quizzes/`
    )
  }

  getQuiz(id: number): Observable<Quiz>{
    return this.client.get<Quiz>(
      `${this.BASE_URL}/api/quizzes/${id}/`
    )
  }

  getUserQuizzes():Observable<Quiz[]>{
    return this.client.get<Quiz[]>(
      `${this.BASE_URL}/api/quizzes/`
    )
  }

}
