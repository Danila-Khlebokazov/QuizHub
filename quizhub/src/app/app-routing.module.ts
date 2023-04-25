import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {QuizPageComponent} from "./quiz-page/quiz-page.component";
import {SignInPageComponent} from "./sign-in-page/sign-in-page.component";
import {QuizListComponent} from "./quiz-list/quiz-list.component";
import {QuizMakeComponent} from "./quiz-make/quiz-make.component";

const routes: Routes = [
  {path: "main", component: MainPageComponent},
  {path: "login", component: SignInPageComponent},
  {path: "quizzes", component: QuizListComponent},
  {path: "making", component: QuizMakeComponent},
  {path: ":userId", component: UserPageComponent},
  {path: ":userId/:quizId", component: QuizPageComponent},
  {path: '', redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
