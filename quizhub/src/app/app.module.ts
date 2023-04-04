import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    QuizPageComponent,
    UserPageComponent,
    QuizListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
