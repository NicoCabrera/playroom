import { Component, OnInit } from '@angular/core';
import { RockPaperScissors } from '../../classes/rock-paper-scissors';
import { OptionEnum } from '../../classes/game';


@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.css'],
})
export class RockPaperScissorsComponent implements OnInit {
  public game:RockPaperScissors;

  constructor() {
    this.game = new RockPaperScissors("Piedra papel o tijera");

   }

  ngOnInit() {
    this.game.computerRandomOption = OptionEnum.Scissor;
    this.game.userChosenOption = OptionEnum.Paper;
  }

  showResult(){
    alert(this.game.getMatchResult());
  }



}
