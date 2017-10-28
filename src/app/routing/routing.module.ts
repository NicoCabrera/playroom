import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Componentes
import { LoginComponent } from '../components/login/login.component';
import { ErrorComponent } from '../components/error/error.component';
import { MainMenuComponent } from '../components/main-menu/main-menu.component';
import { AnagramComponent } from '../components/anagram/anagram.component';


const appRoutes: Routes = [
  {
    path: "",
    component: AnagramComponent
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
    AnagramComponent
  ],
})
export class RoutingModule { }