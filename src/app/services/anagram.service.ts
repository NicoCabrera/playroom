import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AnagramService {
  words: Array<string>;

  constructor(public http: Http) {
    this.words = new Array<string>();
  }


  public getWords() {
    return this.http
      .get("./assets/data/anagramWords.json")
      .toPromise()
      .then(this.jsonData)
  }

  private jsonData(resp: Response) {

    return resp.json() || {};
  }
}
