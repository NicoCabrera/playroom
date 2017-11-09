import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Game } from '../classes/game';
import { Score } from '../classes/score';

@Injectable()
export class GameService {
  scores: Array<Score>;

  constructor(public http: Http) { 
    this.scores = new Array<Score>();
    this.getScores().then((data)=>{
      this.scores = data;
    });
  }

  public getScores() {
    return this.http
      .get("./assets/data/scores.json")
      .toPromise()
      .then(this.jsonData)
  }

  public saveScores(game:Game,player:string){
    let score = new Score(
      game.name,
      player,
      game.win== true?"Ganó":"Perdió",
      game.score);
    
    if(localStorage.getItem('scores') == null){
      let scores = new Array<Score>();
      scores.push(score);
      localStorage.setItem('scores',JSON.stringify(scores));
      console.log(localStorage.getItem('scores'));
    }else{
      let scores = JSON.parse(localStorage.getItem('scores'));
      scores.push(score);
      localStorage.setItem('scores',JSON.stringify(scores));
      console.log(localStorage.getItem('scores'));
    }
  }


  
  private jsonData(resp: Response) {

    return resp.json() || {};
  }

}
