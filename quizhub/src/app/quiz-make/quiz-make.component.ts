import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResultField, Question} from "../models";
import {Quiz} from "../models";
import {flush} from "@angular/core/testing";
import {QuizService} from "../quiz.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-quiz-make',
  templateUrl: './quiz-make.component.html',
  styleUrls: ['./quiz-make.component.css']
})
export class QuizMakeComponent implements OnInit{
  quiz_name: string = "New Quiz";
  quiz_description: string = "new quiz description";
  image: string | undefined;

  quiz_mode = true;
  result_mode = false;
  questions: Question[] = [{question: "Some test qdwa dw ad awddawd awdawd aw duestion", image: undefined, answers:[{
    title: "some title", points: 10
    }]}];
  current_question: number = 0;

  results: ResultField[] = [{result: "Test result", image: undefined, points: 0, description: "Test"}];
  constructor(private http: HttpClient, private qService: QuizService, private router: Router) {}

  ngOnInit() {
  }

  save(){
    this.qService.postQuiz(this.quiz_name, this.quiz_description,this.image , this.questions, this.results).subscribe(
      (quiz) => {
        this.router.navigate([`quizzes/${quiz.id}/making`])
      }
    );

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
    this.questions.push({question: "New Question", image: undefined, answers: [
        {title: "New Answer", points: 0}
      ]})
  }
  delQuestion(id: number){
    this.questions.splice(id, 1)
  }
  addResult(){
    this.results.push({result: "Test result", image: undefined, points: 0, description: "Test"});
  }
  deleteResult(id:number){
    this.results.splice(id, 1);
  }

  addAnswer(){
    this.questions[this.current_question].answers.push({title:"New Answer", points: 0})
  }
  delAnswer(id: number){
    this.questions[this.current_question].answers.splice(id, 1)
  }

  addingImageForResult(event:any, id: number){
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.results[id].image = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);
  }
  addingImageForQuestion(event:any){
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.questions[this.current_question].image = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);
  }

  onFileSelected(event:any) {
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.image = event.target.result;
      console.log(this.image)
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0])
  }

    // if (file) {
    //
    //   const formData = new FormData();
    //
    //   formData.append("thumbnail", file);
    //
    //   const upload$ = this.http.post("/api/thumbnail-upload", formData);
    //
    //   upload$.subscribe();
    // }

}
