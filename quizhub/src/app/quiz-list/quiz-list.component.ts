import { Component } from '@angular/core';
import {quizzes} from "../models";

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent {
  quizzes = quizzes
}
