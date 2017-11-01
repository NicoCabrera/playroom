import { Component, OnInit, NgZone, AfterViewInit } from '@angular/core';
import { SlidePuzzle, DirectionEnum, Tile } from '../../classes/slide-puzzle';
declare var JQuery: any;
declare var $: any;

@Component({
  selector: 'app-slide-puzzle',
  templateUrl: './slide-puzzle.component.html',
  styleUrls: ['./slide-puzzle.component.css']
})
export class SlidePuzzleComponent implements OnInit, AfterViewInit {

  ngAfterViewInit(): void {
    
  }
  public tiles = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, null],
  ];

  ngOnInit() {
    this.initTiles();
  }

  initTiles() {
    let board = $(".board");
    for (var x = 0; x < 4; x++) {
      for (var y = 0; y < 4; y++) {
        let value = y * 4 + x + 1;

        if (value < 16) {
          let tile = $('<div class="tile">' + value + '</div>');
          board.append(tile);
          tile.data("x", x).data("y", y);
          this.tiles[y][x] = tile;
          if (x % 2) {
            tile.css("backgroundColor", "pink");
          } else {
            tile.css("backgroundColor", "lightgreen");
          }
        }
      }

    }
  }

  constructor(private ngZone: NgZone) {
    window.onresize = (e) => {
      ngZone.run(() => {
        let margin = window.innerWidth - 2 * parseInt($("body").css("margin"));
        let width = margin;
        let height = margin;

        let tileWidth = width / 4;
        let tileHeight = height / 4;
        let fontSize = Math.min(tileWidth, tileHeight) / 1.5;

        $(".tile").width(tileWidth).height(tileHeight).css("fontSize", fontSize + "px");
      });

    };
  }

}

