import { Injectable } from '@angular/core';
import {Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {Token, Quiz, Question, ResultField} from "./models";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient, private router: Router) { }

  getQuizzes(): Observable<Quiz[]>{
    return this.client.get<Quiz[]>(
      `${this.BASE_URL}/api/quizzes/`
    )
  }

  getQuiz(id: number): Observable<Quiz>{
    return this.client.get<Quiz>(
      `${this.BASE_URL}/api/quizzes/${id}/`
    ).pipe(
      catchError(error => {
        if (error.status === 400) {
          this.router.navigate(["not-found"])
        }
        return throwError(error);
      })
    );
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
      "rating": 5
          }
    )
  }

  private transformToBase64(url:string): string | undefined{
    var image: string | undefined;
    const base64regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    this.client.get(url ?? "", { responseType: 'blob' }).subscribe((imageBlob: Blob) => {
      // Create a FileReader to read the image as a Base64 string
      const reader = new FileReader();
      reader.readAsDataURL(imageBlob);
      reader.onloadend = () => {
        // Set the Base64 string to a property of the component
        image =  reader.result as string;
      };
    });
    if (base64regex.test(url)){
      return url;
    }
    return undefined;
  }

  updateQuiz(quiz: Quiz){
    return this.client.put<Quiz>(
      `${this.BASE_URL}/api/quizzes/${quiz.id}/`,
      {
        "description": quiz.description,
        "image": this.transformToBase64(quiz.image ?? ""),
        "questions": quiz.questions,
        "rating": quiz.rating,
        "results": quiz.results,
        "title": quiz.title,
      }
    )
  }

  deleteQuiz(quiz: Quiz){
    return this.client.delete(
      `${this.BASE_URL}/api/quizzes/${quiz.id}/`
    ).pipe(catchError(error => {
      if (error.status === 400) {
        this.router.navigate(["not-found"])
      }
      return throwError(error);
    }))
  }

  getUserQuizzes(username: string):Observable<Quiz[]>{
    return this.client.get<Quiz[]>(
      `${this.BASE_URL}/api/${username}/quizzes/`
    )
  }

}
