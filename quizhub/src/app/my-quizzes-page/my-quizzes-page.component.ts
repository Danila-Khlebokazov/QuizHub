import { Component } from '@angular/core';
import {Quiz} from "../models";
import {QuizService} from "../quiz.service";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-my-quizzes-page',
  templateUrl: './my-quizzes-page.component.html',
  styleUrls: ['../quiz-list/quiz-list.component.css']
})
export class MyQuizzesPageComponent {
  quizzes: Quiz[] = []
  constructor(private qService: QuizService, private app: AppComponent) {

  }

  ngOnInit() {
    this.getQuizzes()
  }

  getQuizzes(){
    this.qService.getUserQuizzes(this.app.username).subscribe((quizzes) => {
      this.quizzes = quizzes
    })
    console.log(this.quizzes)
  }
}
