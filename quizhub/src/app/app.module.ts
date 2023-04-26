import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';
import { QuizMakeComponent } from './quiz-make/quiz-make.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    QuizPageComponent,
    UserPageComponent,
    QuizListComponent,
    SignInPageComponent,
    QuizMakeComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
