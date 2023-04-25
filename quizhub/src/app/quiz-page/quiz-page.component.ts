import {Component, OnInit} from '@angular/core';
import {Field, Quiz, quizzes} from "../models";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit{
  start = false;
  points = 0;
  error = false;
  finished = false;
  result: Field = {image: "", answer: "", description: "", points: 0}

  currentQuestion = 0;
  currentAns = -1;

  startQuiz(){
      this.start = true;
      this.points = 0;
    this.error = false;
    this.finished = false;
  }

  quiz: Quiz = { image: "", description: "", pointsTable: [], questions: [], rating: 0, title: "", id:0}
  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.start = false;
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('quizId'));
      this.quiz = quizzes.filter((quiz) => quiz.id == id)[0];
    });
  }

  next() {
    if (this.quiz.questions.length > this.currentQuestion + 1 && this.currentAns != -1) {
      this.error = false;
      this.points += this.quiz.questions[this.currentQuestion].answers[this.currentAns].points;
      this.currentAns = -1;
      this.currentQuestion += 1;
    }
    else if(this.currentAns == -1){
        this.error = true;
    }
  }
  calcResult(){
    this.points += this.quiz.questions[this.currentQuestion].answers[this.currentAns].points;
    this.finished = true;
    this.quiz.pointsTable.forEach((field) =>{
      if(field.points <= this.points){
        this.result = field;
      }
    })
  }

  select(ans: number){
    this.currentAns = ans;
  }
}
