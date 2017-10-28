import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Validaciones en formularios
import { RouterModule } from '@angular/router'; // Ruteo
import { HttpModule } from '@angular/http'; 

import { AppComponent } from './app.component';
import { RoutingModule } from './routing/routing.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    RouterModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
