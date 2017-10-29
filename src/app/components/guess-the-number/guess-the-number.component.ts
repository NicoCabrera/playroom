import { Component, OnInit } from '@angular/core';
import { GuessTheNumber } from '../../classes/guess-the-number';

@Component({
  selector: 'app-guess-the-number',
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css']
})
export class GuessTheNumberComponent implements OnInit {
  game:GuessTheNumber;
  
  constructor() {
    this.game = new GuessTheNumber("Adivina el número",10,1);
   }

  ngOnInit() {
    this.game.generateRandomValue();
    
    console.log(this.game.randomValue);
  }

  verifyAnswer(){
    alert(this.game.verify())
  }

}
