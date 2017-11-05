import { Component, OnInit } from '@angular/core';
import { MemoTest, Card } from '../../classes/memo-test';
declare var $;
@Component({
  selector: 'app-memo-test',
  templateUrl: './memo-test.component.html',
  styleUrls: ['./memo-test.component.css'],
})
export class MemoTestComponent implements OnInit {
  game: MemoTest;
  result:string;
  colors: Array<string> = [
    "black",
    "pink accent-1",
    "purple",
    "blue",
    "cyan accent-2",
    "green accent-3",
    "yellow accent-2",
    "deep-orange accent-3"
  ];

  constructor() {
    this.game = new MemoTest("Memo test");
    this.game.colors = this.colors;
    this.game.colors = this.game.colors.concat(this.colors)
    this.result = "PERDISTE!";  
    this.game.initTimer(300);
  }

  ngOnInit() {
    this.setTiles();
    this.setInitialAnimations();
    this.initializeModalComponent();
    this.game.startTimer(() => {
      this.game.timer.stoper(() => {
        this.game.win = false;
        this.result = "PERDISTE!";
        $('#modal1').modal('open');
      });
    });
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

  setTiles() {
    this.game.shuffleColors();
  }

  showFirstSelectedCard(id,color){
    let card = "#" + id
    this.game.firstCardSelected.id = id;
    this.game.firstCardSelected.color = color;

    $(card).addClass(color);
    $(card).animateCss('flipInY');
  }

  showSecondSelectedCard(id,color){
    this.game.secondCardSelected.id = id;
    this.game.secondCardSelected.color = color;
    let card = "#" + id;
    $(card).addClass(color);
  }

  animateSecondSelectedCardIsSelected(card){
    $(card).animateCss('flipInY').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", () => {
      if (this.game.firstCardSelected.color != this.game.secondCardSelected.color) {

        let firstCard = "#" + this.game.firstCardSelected.id;
        let secondCard = "#" + this.game.secondCardSelected.id;

        $(firstCard).removeClass(this.game.firstCardSelected.color);
        $(secondCard).removeClass(this.game.secondCardSelected.color);

        this.game.firstCardSelected = new Card(-1, "");
        this.game.secondCardSelected = new Card(-1, "");
      }else{

        let firstCard = "#" + this.game.firstCardSelected.id;
        let secondCard = "#" + this.game.secondCardSelected.id;

        $(firstCard).addClass("do-not-flip");
        $(secondCard).addClass("do-not-flip");

        this.game.firstCardSelected = new Card(-1, "");
        this.game.secondCardSelected = new Card(-1, "");
        this.game.rightAnwerCount++;
        console.log("Cantidad de respuestas correctas: " + this.game.rightAnwerCount);
        if(this.game.rightAnwerCount == 8){
          this.finishedGame("GANASTE!");
        }
      }
    });
  }

  showColor(id: number, color: string) {

    let card = "#" + id;
    if (!$(card).hasClass("do-not-flip")) {
      if (this.game.firstCardSelected.id == -1) {
        
        this.showFirstSelectedCard(id,color);

      } else {
        if (this.game.firstCardSelected.id != id && this.game.secondCardSelected.id == -1) {

          this.showSecondSelectedCard(id,color);
          this.animateSecondSelectedCardIsSelected(card);
        }
      }
    }
  }

  initializeModalComponent() {
    $(document).ready(function () {
      $('.modal').modal(
        {
          dismissible: false,
        });
    });
  }

  finishedGame(message) {
    this.game.score = this.game.timer.timeLeft * 10;
    this.game.win = true;
    this.game.timer.stoper(() => this.result = message);
    $('#modal1').modal('open');
  }


}
