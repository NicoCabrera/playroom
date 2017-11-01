import { Component, OnInit } from '@angular/core';
import { Anagram } from '../../classes/anagram';
import { AnagramService } from '../../services/anagram.service';
import { Timer } from '../../classes/timer';
declare var $;
@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css'],
  providers: [AnagramService]
})
export class AnagramComponent implements OnInit {

  game: Anagram;
  timer:Timer;


  //Styles
  subtitleMDcol = "col s12 jungla white-text";
  subtitleMDtext = "flow-text center-align text-jungla";
  constructor(public anagramService:AnagramService) {
    this.game = new Anagram("Anagrama");
    this.game.initTimer(10);
  }

  ngOnInit() {
    this.anagramService.getWords().then(
      (words)=>{
        this.game.words = words;
        this.game.setWordToGuess();
      }
    )
  }

  validateAnswer() {
    alert(this.game.validateWord());
  }

  cleanAnswer(){
    this.game.wordUser = "";
    
  }


  startOnClick(){
    this.showContainerContent();
    this.game.startTimer(this.saludos);
  }

  saludos(){
    $("#pulse-timer").removeClass("pulse");
  }

  showContainerContent(){
    $(".container").slideDown("slow",()=>{
      $(".btnTimer").css("visibility","visible");
    });
    $("#btnStart").hide(0);
  }
}
