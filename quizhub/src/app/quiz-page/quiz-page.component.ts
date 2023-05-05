import {Component, OnInit} from '@angular/core';
import {ResultField, Quiz} from "../models";
import {ActivatedRoute} from "@angular/router";
import {QuizService} from "../quiz.service";

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
  result: ResultField = {image: "", result: "Test", description: "", points: 0}

  currentQuestion = 0;
  currentAns = -1;

  startQuiz(){
    this.start = true;
    this.points = 0;
    this.error = false;
    this.finished = false;
  }

  quiz!: Quiz;
  constructor(private route: ActivatedRoute, private qService: QuizService) {
  }
  ngOnInit() {
    this.start = false;
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('quizId'));
      this.qService.getQuiz(id).subscribe((quiz) =>{
        this.quiz = quiz;
        console.log(quiz)
      })
    });
  }

  next() {
    if (this.quiz) {
      if (this.quiz.questions.length > this.currentQuestion + 1 && this.currentAns != -1) {
        this.error = false;
        this.points += this.quiz.questions[this.currentQuestion].answers[this.currentAns].points;
        this.currentAns = -1;
        this.currentQuestion += 1;
      } else if (this.currentAns == -1) {
        this.error = true;
      }
    }
    console.log(this.points)
  }
  calcResult(){
    if(this.quiz) {
      this.points += this.quiz.questions[this.currentQuestion].answers[this.currentAns].points;
      this.finished = true;
      this.quiz.results.forEach((field) => {
        console.log(field.points, this.points)
        if (field.points < this.points) {
          this.result = field;
        }
      })
    }
  }

  select(ans: number){
    this.currentAns = ans;
  }
}
