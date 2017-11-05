import { Component, OnInit, NgZone, AfterViewInit, ViewChild } from '@angular/core';
import { SlidePuzzle, DirectionEnum, Tile } from '../../classes/slide-puzzle';
declare var JQuery: any;
declare var $: any;

@Component({
  selector: 'app-slide-puzzle',
  templateUrl: './slide-puzzle.component.html',
  styleUrls: ['./slide-puzzle.component.css']
})
export class SlidePuzzleComponent implements OnInit {
  @ViewChild("recuadro") myCanvas;
  context:CanvasRenderingContext2D;

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
    var canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext("2D")
    console.log(this.context);
  }

  constructor(private ngZone: NgZone) {

  }

}

