import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Score } from '../../classes/score';

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: ['./scores.component.css'],
  providers: [GameService]
})
export class ScoresComponent implements OnInit {
  scores:Array<Score>;
  constructor(public gameService: GameService) {
    this.scores = new Array<Score>();
  }

  ngOnInit() {
    let storedData = localStorage.getItem("scores");
    if(storedData != null){
      this.scores = JSON.parse(storedData);
    }

    
  }

}
