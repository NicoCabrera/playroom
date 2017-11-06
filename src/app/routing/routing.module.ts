import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes
import { LoginComponent } from '../components/login/login.component';
import { ErrorComponent } from '../components/error/error.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { AnagramComponent } from '../components/anagram/anagram.component';
import { GuessTheNumberComponent } from '../components/guess-the-number/guess-the-number.component';
import { RockPaperScissorsComponent } from '../components/rock-paper-scissors/rock-paper-scissors.component';
import { MathChallengeComponent } from '../components/math-challenge/math-challenge.component';
import { MemoTestComponent } from '../components/memo-test/memo-test.component';

const appRoutes: Routes = [
  {
    path: "",
    component: MainMenuComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "menu",
    component: MainMenuComponent,
  },
  {
    path: "**",
    component: ErrorComponent
  },
  {
    path: "anagram",
    component: AnagramComponent
  },
  {
    path: "guess-the-number",
    component: GuessTheNumberComponent
  },
  {
    path: "rock-paper-scissors",
    component: RockPaperScissorsComponent
  },
  {
    path: "match-challenge",
    component: MathChallengeComponent
  },
  {
    path: "memo-test",
    component: MemoTestComponent
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [
    LoginComponent,
    ErrorComponent,
    MainMenuComponent,
    AnagramComponent,
    GuessTheNumberComponent,
    RockPaperScissorsComponent,
    MathChallengeComponent,
    MemoTestComponent
  ],
})
export class RoutingModule { }