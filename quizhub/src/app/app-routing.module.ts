import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {UserPageComponent} from "./user-page/user-page.component";
import {QuizPageComponent} from "./quiz-page/quiz-page.component";

const routes: Routes = [
  {path: "main", component: MainPageComponent},
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
