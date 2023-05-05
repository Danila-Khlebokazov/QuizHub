import {Component, OnInit} from '@angular/core';
import {QuizService} from "../quiz.service";
import {Quiz} from "../models";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit{
  quizzes: Quiz[] = []
  constructor(private qService: QuizService) {

  }

  ngOnInit() {
    this.getQuizzes()
  }

  getQuizzes(){
    this.qService.getQuizzes().subscribe((quizzes) => {
      this.quizzes = quizzes
    })
    console.log(this.quizzes)
  }
}
