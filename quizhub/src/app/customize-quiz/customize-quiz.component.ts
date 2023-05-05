import {Component, OnInit} from '@angular/core';
import {Quiz} from "../models";
import {ActivatedRoute, Router} from "@angular/router";
import {QuizService} from "../quiz.service";

@Component({
  selector: 'app-customize-quiz',
  templateUrl: './customize-quiz.component.html',
  styleUrls: ['./customize-quiz.component.css']
})
export class CustomizeQuizComponent implements OnInit{

  quiz!: Quiz;

  quiz_mode = true;
  result_mode = false;
  current_question: number = 0;

  constructor(private route: ActivatedRoute, private router: Router, private qService: QuizService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('quizId'));
      this.qService.getQuiz(id).subscribe((quiz) =>{
        this.quiz = quiz;
        console.log(quiz)
      })
    });
  }

  saveQuiz(){
    this.qService.updateQuiz(this.quiz).subscribe();
  }

  deleteQuiz(){
    this.qService.deleteQuiz(this.quiz).subscribe();
    this.router.navigate(["../"])
  }

  turn_quiz_mode(){
    this.quiz_mode = true;
    this.result_mode = false;
  }
  turn_result_mode(){
    this.quiz_mode = false;
    this.result_mode = true;
  }
  addQuestion(){
    this.quiz.questions.push({question: "New Question", image: undefined, answers: [
        {title: "New Answer", points: 0}
      ]})
  }
  delQuestion(id: number){
    this.quiz.questions.splice(id, 1)
  }
  addResult(){
    this.quiz.results.push({result: "Test result", image: undefined, points: 0, description: "Test"});
  }
  deleteResult(id:number){
    this.quiz.results.splice(id, 1);
  }

  addAnswer(){
    this.quiz.questions[this.current_question].answers.push({title:"New Answer", points: 0})
  }
  delAnswer(id: number){
    this.quiz.questions[this.current_question].answers.splice(id, 1)
  }

  addingImageForResult(event:any, id: number){
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.quiz.results[id].image = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);
  }
  addingImageForQuestion(event:any){
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.quiz.questions[this.current_question].image = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  onFileSelected(event:any) {
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.quiz.image = event.target.result;
      console.log(this.quiz.image)
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0])
  }
}
