import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Token, Quiz, Question, ResultField} from "./models";
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

  postQuiz(title:string, description: string, image: string | undefined, questions: Question[], results: ResultField[]):Observable<Quiz>{

    return this.client.post<Quiz>(
        `${this.BASE_URL}/api/quizzes/`,
    {
            title,
      description,
      image,
      questions,
      results,
      "rating": 0
          }
    )
  }

  getUserQuizzes(username: string):Observable<Quiz[]>{
    return this.client.get<Quiz[]>(
      `${this.BASE_URL}/api/${username}/quizzes/`
    )
  }

}
