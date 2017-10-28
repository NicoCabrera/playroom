import { Component, OnInit } from '@angular/core';
import { Anagram } from '../../classes/anagram';
import { AnagramService } from '../../services/anagram.service';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css'],
  providers: [AnagramService]
})
export class AnagramComponent implements OnInit {

  game: Anagram;
  
  constructor(public anagramService:AnagramService) {
    this.game = new Anagram("Anagrama");

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

}
