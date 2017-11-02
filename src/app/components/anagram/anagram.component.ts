import { Component, OnInit } from '@angular/core';
import { Anagram } from '../../classes/anagram';
import { AnagramService } from '../../services/anagram.service';
import { Timer } from '../../classes/timer';
declare var $;
declare var Materialize;
@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css'],
  providers: [AnagramService]
})
export class AnagramComponent implements OnInit {

  game: Anagram;
  timer: Timer;


  //Styles
  subtitleMDcol = "col s12 jungla white-text";
  subtitleMDtext = "flow-text center-align text-jungla";
  constructor(public anagramService: AnagramService) {
    this.game = new Anagram("Anagrama");
    this.game.initTimer(10);
  }

  ngOnInit() {
    this.anagramService.getWords().then(
      (words) => {
        this.game.words = words;
        this.game.setWordToGuess();
      }
    )
  }

  validateAnswer() {
    try {
      Materialize.Toast.removeAll();
      if (this.game.validateWord()) {
        this.cleanAnswer();
        this.game.setWordToGuess();
        Materialize.toast("Correcto!",3000,"rounded");
      } else {
        Materialize.toast('Incorrecto!', 3000,"rounded");
      }
    } catch (error) {

    }
  }

  cleanAnswer() {
    this.game.wordUser = "";

  }


  startOnClick() {
    this.showContainerContent();
    this.game.startMessage = "";
    this.game.startTimer(this.saludos);
    
  }

  saludos() {
    $("#pulse-timer").removeClass("pulse");
  }

  showContainerContent() {
    $(".container").slideDown("slow", () => {
      $(".btnTimer").css("visibility", "visible");
      this.game.startMessage = "Tiempo restante";
    });
    $("#btnStart").hide(0);
  }


}
