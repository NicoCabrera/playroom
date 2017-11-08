import { Component, OnInit, OnDestroy } from '@angular/core';
import { Anagram } from '../../classes/anagram';
import { AnagramService } from '../../services/anagram.service';
import { Timer } from '../../classes/timer';
import { Router } from '@angular/router';
declare var $;
declare var Materialize;
@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css'],
  providers: [AnagramService]
})
export class AnagramComponent implements OnInit , OnDestroy{

  game: Anagram;
  timer: Timer;
  result: string;

  //Styles
  subtitleMDcol = "col s12 jungla white-text";
  subtitleMDtext = "flow-text center-align text-jungla";

  constructor(public anagramService: AnagramService,private router:Router) {
    this.game = new Anagram("Anagrama");
    this.game.initTimer(300);
    this.result = "";
  }

  ngOnInit() {
    this.anagramService.getWords().then(
      (words) => {
        this.game.words = words;
        this.game.setWordToGuess();
      }
    );

    this.initializeModalComponent();

    $("#userWord").keypress((e)=>{
      if(e.which == 13) {
         this.validateAnswer();
      }
   });
  }

  ngOnDestroy(): void {

    if(this.game.timer.hasSub()){
      this.game.timer.stoper(()=>{});
    }
  }

  validateAnswer() {
    try {
      Materialize.Toast.removeAll();
      if (this.game.validateWord()) {
        this.cleanAnswer();
        if (this.game.setWordToGuess()) {
          Materialize.toast("Correcto!", 3000, "rounded");
        } else {
          this.game.win = true;
          this.finishedGame("GANASTE");
        }
      } else {
        Materialize.toast('Incorrecto!', 3000, "rounded");
      }
    } catch (error) {

    }
  }

  finishedGame(message) {
    this.game.score = this.game.timer.timeLeft * 10;
    this.game.timer.stoper(() => this.game.shuffledWord = "JUEGO TERMINADO");
    this.result = message;
    $('#modalAnagram').modal('open');
  }

  cleanAnswer() {
    this.game.wordUser = "";
  }


  startOnClick() {
    this.showContainerContent();
    this.game.startMessage = "";
    this.game.startTimer(() => {
      $("#pulse-timer").removeClass("pulse");
      this.game.timer.stoper(() => {
        this.game.shuffledWord = "JUEGO TERMINADO";
        this.result = "PERDISTE!";
        $('#modalAnagram').modal('open');
      });
    });
  }

  showContainerContent() {
    $(".container").slideDown("slow", () => {
      $(".btnTimer").css("visibility", "visible");
      this.game.startMessage = "tiempo restante";
    });
    $("#btnStart").hide(0);
  }

  initializeModalComponent() {
    $(document).ready(function () {
      $('#modalAnagram').modal(
        {
          dismissible: false,
        });
    });
  }

  playAgain(){
    this.game = new Anagram("Anagrama");
    this.game.initTimer(300);
    this.result = "";

    this.anagramService.getWords().then(
      (words) => {
        this.game.words = words;
        this.game.setWordToGuess();
      }
    );
    this.startOnClick();
    $("#pulse-timer").addClass("pulse");
  }

  goToRegisteredUserMenu(){
    this.router.navigate(["/registered-users"]);
  }

}
