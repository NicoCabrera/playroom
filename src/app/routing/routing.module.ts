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
import { RegisteredUsersComponent } from '../components/registered-users/registered-users.component';
import { SessionManagerService } from '../services/session-manager.service';

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
    path: "anagram",
    component: AnagramComponent,
    canActivate: [SessionManagerService]
  },
  {
    path: "guess-the-number",
    component: GuessTheNumberComponent,
    canActivate: [SessionManagerService]
  },
  {
    path: "rock-paper-scissors",
    component: RockPaperScissorsComponent,
    canActivate: [SessionManagerService]
  },
  {
    path: "math-challenge",
    component: MathChallengeComponent,
    canActivate: [SessionManagerService]
  },
  {
    path: "memo-test",
    component: MemoTestComponent,
    canActivate: [SessionManagerService]
  },
  {
    path: "registered-users",
    component: RegisteredUsersComponent,
    canActivate: [SessionManagerService]
  },
  {
    path: "**",
    component: ErrorComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
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
    MemoTestComponent,
    RegisteredUsersComponent,

  ],
  providers: [SessionManagerService]
})
export class RoutingModule { }