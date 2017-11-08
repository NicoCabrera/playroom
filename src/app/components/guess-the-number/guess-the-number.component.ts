import { Component, OnInit, OnDestroy } from '@angular/core';
import { GuessTheNumber } from '../../classes/guess-the-number';
import { Router } from '@angular/router';
declare var Materialize;
declare var $;

@Component({
  selector: 'app-guess-the-number',
  templateUrl: './guess-the-number.component.html',
  styleUrls: ['./guess-the-number.component.css']
})
export class GuessTheNumberComponent implements OnInit , OnDestroy{
 
  game: GuessTheNumber;
  result: string;
  constructor(private router:Router) {
    this.game = new GuessTheNumber("Adivina el número", 10, 1);
    this.game.initTimer(300);
    this.result = "";
  }

  ngOnInit() {
    this.game.generateRandomValue();
    this.initializeModalComponent();
    $("#userNum").keypress((e) => {
      if (e.which == 13) {
        this.verifyAnswer();
      }
    });

    this.start();
  }

  ngOnDestroy(): void {
    this.game.timer.stoper(()=>{});
  }


  start() {
    this.game.startTimer(() => {
      this.game.timer.stoper(() => {
        this.game.win = false;
        this.result = "PERDISTE!";
        $('#modalGuessTheNumber').modal('open');
      });
    });
  }

  verifyAnswer() {
    if (this.game.verify()) {
      this.correct();
    } else {
      this.incorrect();
    }
  }

  incorrect() {
    Materialize.toast("Incorrecto!", 3000, "rounded");
    if (this.game.timer.timeLeft > 20) {
      this.game.timer.timeLeft = this.game.timer.timeLeft - 20;
    }else{
      this.game.timer.timeLeft = 0;
      this.finishedGame("PERDISTE!");
    }
  }

  correct() {
    this.finishedGame("GANASTE!");
  }

  initializeModalComponent() {
    $(document).ready(function () {
      $('#modalGuessTheNumber').modal(
        {
          dismissible: false,
        });
    });
  }

  finishedGame(message) {
    this.game.score = this.game.timer.timeLeft * 10;
    this.game.timer.stoper(() => this.result = message);
    $('#modalGuessTheNumber').modal('open');
  }

  goToRegisteredUserMenu(){
    this.router.navigate(["/registered-users/list-of-games"]);
  }


  playAgain(){
    this.game = new GuessTheNumber("Adivina el número", 10, 1);
    this.game.initTimer(300);
    this.result = "";

    this.game.generateRandomValue();
    this.start();
  }

}
