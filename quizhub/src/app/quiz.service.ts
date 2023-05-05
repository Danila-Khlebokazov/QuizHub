import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Token, Quiz, Question, ResultField} from "./models";
import {HttpClient} from "@angular/common/http";
import {error} from "@angular/compiler-cli/src/transformers/util";

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
      "rating": 5
          }
    )
  }

  private transformToBase64(url:string|undefined): string | undefined{
    var image: string | undefined = url;
    this.client.get(url ?? "", { responseType: 'blob' }).subscribe((imageBlob: Blob) => {
      // Create a FileReader to read the image as a Base64 string
      const reader = new FileReader();
      reader.readAsDataURL(imageBlob);
      reader.onloadend = () => {
        // Set the Base64 string to a property of the component
        image =  reader.result as string;
      };
    });
    return image;
  }

  updateQuiz(quiz: Quiz){
    return this.client.put<Quiz>(
      `${this.BASE_URL}/api/quizzes/${quiz.id}/`,
      {
        "title": quiz.title,
        "description": quiz.description,
        "questions": quiz.questions,
        "rating": quiz.rating,
        "results": quiz.results,
        "image": this.transformToBase64(quiz.image)
      }
    )
  }

  deleteQuiz(quiz: Quiz){
    return this.client.delete(
      `${this.BASE_URL}/api/quizzes/${quiz.id}/`
    )
  }

  getUserQuizzes(username: string):Observable<Quiz[]>{
    return this.client.get<Quiz[]>(
      `${this.BASE_URL}/api/${username}/quizzes/`
    )
  }

}
