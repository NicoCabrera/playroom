import { Component, OnInit, OnDestroy } from '@angular/core';
import { MathChallengeService } from '../../services/math-challenge.service';
import { MathChallenge } from '../../classes/math-challenge';
import { Router } from '@angular/router';
declare var $;
declare var Materialize;

@Component({
  selector: 'app-math-challenge',
  templateUrl: './math-challenge.component.html',
  styleUrls: ['./math-challenge.component.css'],
  providers: [MathChallengeService]
})
export class MathChallengeComponent implements OnInit,OnDestroy {
  

  public game: MathChallenge;
  public result: string;

  constructor(public mathChallengeService: MathChallengeService, private router: Router) {
    this.game = new MathChallenge("Agilidad aritmética");
    this.result = "";
  }

  ngOnInit() {
    this.mathChallengeService.getCalculations()
      .then((calculations) => {
        this.game.calculations = calculations;
        this.game.setCalculation();
      });
    this.game.initTimer(300);
    this.start();
    this.initializeModalComponent();
    $("#userWord").keypress((e) => {
      if (e.which == 13) {
        this.validateAnswer();
      }
    });
  }

  ngOnDestroy(): void {
    this.game.timer.stoper(()=>{});
  }

  viewSelectedCalculationResult() {
    this.game.showResult();
  }

  start() {
    this.game.startTimer(() => {
      this.game.timer.stoper(() => {
        this.game.win = false;
        this.result = "PERDISTE!";
        $('#modalMathChallenge').modal('open');
      });
    });
  }

  validateAnswer() {
    try {
      if (this.game.validateAnwer()) {
        if (this.game.setCalculation()) {
          this.game.userAnswer = "";
          Materialize.toast("Correcto!", 3000, "rounded");
        } else {
          this.game.win = true;
          this.finishedGame("GANASTE!");
        }
      } else {
        Materialize.toast("Incorrecto!", 3000, "rounded");
        if (this.game.timer.timeLeft >= 10) {
          this.game.timer.timeLeft = this.game.timer.timeLeft - 10;
        } else {
          this.game.timer.stoper(() => {
            this.finishedGame("PERDISTE!");
            this.game.score = 0;
          });
        }

      }
    } catch (error) {

    }
  }

  finishedGame(message) {
    this.game.score = this.game.timer.timeLeft * 10;
    this.game.timer.stoper(() => { this.result = message; });
    $('#modalMathChallenge').modal('open');
  }

  initializeModalComponent() {
    $(document).ready(function () {
      $('#modalMathChallenge').modal(
        {
          dismissible: false,
        });
    });
  }

  goToRegisteredUserMenu() {
    this.router.navigate(["/registered-users/list-of-games"]);
  }

  playAgain() {
    this.game = new MathChallenge("Agilidad aritmética");
    this.result = "";

    this.mathChallengeService.getCalculations()
      .then((calculations) => {
        this.game.calculations = calculations;
        this.game.setCalculation();
      });
    this.game.initTimer(300);
    this.start();
  }
}
