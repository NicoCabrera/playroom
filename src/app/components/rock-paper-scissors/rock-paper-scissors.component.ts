import { Component, OnInit } from '@angular/core';
import { RockPaperScissors } from '../../classes/rock-paper-scissors';
import { OptionEnum, MatchResultEnum } from '../../classes/game';
declare var $;
declare var Materialize;

@Component({
  selector: 'app-rock-paper-scissors',
  templateUrl: './rock-paper-scissors.component.html',
  styleUrls: ['./rock-paper-scissors.component.css'],
})
export class RockPaperScissorsComponent implements OnInit {
  public game: RockPaperScissors;
  public imageForUserValue: string;
  public imageForPCValue: string;

  constructor() {
    this.game = new RockPaperScissors("Piedra papel o tijera");
    this.imageForUserValue = "assets/img/piedraa.png";
    this.imageForPCValue = "assets/img/piedrab.png";
  }

  ngOnInit() {
    this.game.computerRandomOption = OptionEnum.Rock;
    this.game.userChosenOption = OptionEnum.Rock;
    this.setInitialAnimations();
  }

  setInitialAnimations() {
    $.fn.extend({
      animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function () {
          $(this).removeClass('animated ' + animationName);
        });
        return this;
      }
    });
  }

  play() {
    this.game.selectRamdomOption();
    let lastUserValue = this.imageForUserValue;
    this.imageForPCValue = "assets/img/piedrab.png";
    this.imageForUserValue = "assets/img/piedraa.png";
    $('#userimg').animateCss('bounce').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", () => {
      this.imageForUserValue = lastUserValue;
      this.showResult();
    });
    $('#pcimg').animateCss('bounce').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", () => {
      this.setImageForPcValue();
    });
  }


  showResult() {
    let matchResult = this.game.getMatchResult();
    switch (matchResult) {
      case MatchResultEnum.Win:
        this.game.partialWins++;
        Materialize.toast("Ganaste!", 3000, "rounded");
        break;
      case MatchResultEnum.Lose:
        this.game.partialLoses++;
        Materialize.toast("Perdiste!", 3000, "rounded");
        break;
      default:
        Materialize.toast("Empate", 3000, "rounded");
        break;
    }
  }

  setImageForPcValue() {
    let value = this.game.computerRandomOption;
    switch (value) {
      case OptionEnum.Rock:
        this.imageForPCValue = "assets/img/piedrab.png";
        break;
      case OptionEnum.Paper:
        this.imageForPCValue = "assets/img/papelb.png";
        break;
      case OptionEnum.Scissor:
        this.imageForPCValue = "assets/img/tijerab.png";
        break;
      default:
        break;
    }
  }

  setImageForUserValue(value: OptionEnum) {
    switch (value) {
      case OptionEnum.Rock:
        this.imageForUserValue = "assets/img/piedraa.png";
        this.game.userChosenOption = OptionEnum.Rock;
        break;
      case OptionEnum.Paper:
        this.imageForUserValue = "assets/img/papela.png";
        this.game.userChosenOption = OptionEnum.Paper;
        break;
      case OptionEnum.Scissor:
        this.imageForUserValue = "assets/img/tijeraa.png";
        this.game.userChosenOption = OptionEnum.Scissor;
        break;
      default:
        break;
    }
  }


}
