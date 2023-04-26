import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-quiz-make',
  templateUrl: './quiz-make.component.html',
  styleUrls: ['./quiz-make.component.css']
})
export class QuizMakeComponent {
  quiz_name: string = "New Quiz";
  quiz_description: string = "new quiz description";

image: string | undefined
  constructor(private http: HttpClient) {}

  onFileSelected(event:any) {
    var reader = new FileReader();

    reader.onload = (event: any) => {
      this.image = event.target.result;
    };

    reader.onerror = (event: any) => {
      console.log("File could not be read: " + event.target.error.code);
    };

    reader.readAsDataURL(event.target.files[0]);

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
