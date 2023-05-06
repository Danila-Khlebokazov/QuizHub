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
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SignUpComponent } from './sign-up/sign-up.component';
import {AuthInterceptor} from "./AuthInterceptor";
import { MyQuizzesPageComponent } from './my-quizzes-page/my-quizzes-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CustomizeQuizComponent } from './customize-quiz/customize-quiz.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    QuizPageComponent,
    UserPageComponent,
    QuizListComponent,
    SignInPageComponent,
    QuizMakeComponent,
    SignUpComponent,
    MyQuizzesPageComponent,
    TopBarComponent,
    FooterComponent,
    CustomizeQuizComponent,
    NotFoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
      HttpClientModule
    ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
