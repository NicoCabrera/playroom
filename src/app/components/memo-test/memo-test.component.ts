import { Component, OnInit } from '@angular/core';
import { MemoTest } from '../../classes/memo-test';
declare var $;
@Component({
  selector: 'app-memo-test',
  templateUrl: './memo-test.component.html',
  styleUrls: ['./memo-test.component.css'],
})
export class MemoTestComponent implements OnInit {
  game: MemoTest;
  colors: Array<string> = [
    "red accent-4",
    "pink accent-1",
    "purple",
    "blue",
    "cyan accent-2",
    "green accent-3",
    "yellow accent-2",
    "deep-orange"
  ];

  constructor() {
    this.game = new MemoTest("Memo test");
    this.game.colors = this.colors;
    this.game.colors = this.game.colors.concat(this.colors);
  }

  ngOnInit() {
    console.log(this.game.colors);
  }


  setTiles() {
    console.log("Cantidad de colores: " + this.game.colors.length);
    this.game.shuffleColors();
  }

  showColor(id,color){
    $("#" + id).addClass(color);
    console.log($("#" + id));
  }
}
