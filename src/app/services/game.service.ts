import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GameService {

  constructor(public http: Http) { 

  }

  public getScores() {
    return this.http
      .get("./assets/data/scores.json")
      .toPromise()
      .then(this.jsonData)
  }

  public saveScores(){

  }
  
  private jsonData(resp: Response) {

    return resp.json() || {};
  }

}
