import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SlidePuzzle, DirectionEnum, Tile } from '../../classes/slide-puzzle';
declare var JQuery: any;
declare var $: any;

@Component({
  selector: 'app-slide-puzzle',
  templateUrl: './slide-puzzle.component.html',
  styleUrls: ['./slide-puzzle.component.css']
})
export class SlidePuzzleComponent implements OnInit, AfterViewInit {
  public game: SlidePuzzle;
  ngAfterViewInit(): void {
    this.hideLastElement();
    this.saveCoordinates();
  }

  ngOnInit() {
    this.game.shuffleTiles();
  }

  constructor() {
    this.game = new SlidePuzzle("Rompecabezas");
  }



  verPosition() {
    console.log($("#8").position());
    console.log($("#8").data("x"));
  }

  mover() {
    $('.col').animate({
      top: 54
    }, 10);
  }
  volver() {
    $('.col').animate({
      top: 0
    }, 10);
  }

  saveCoordinates() {
    this.game.tiles.forEach((element, index) => {
      let tile = $("#" + element.index);
      this.setCoordenates(index, element);
    });

    console.log(this.game.tiles);
  }



  hideLastElement() {
    $("#16").css("visibility", "hidden");
  }

  move(selectedItem) {
    let direction: DirectionEnum;
    let gap = this.game.getGap();
    if (selectedItem.x == gap.x && (selectedItem.y == (gap.y + 1))) {
      direction = DirectionEnum.left;
    } else if (selectedItem.x == gap.x && (selectedItem.y == (gap.y - 1))) {
      direction = DirectionEnum.right;
    } else if (selectedItem.y == gap.y && (selectedItem.x == (gap.x + 1))) {
      direction = DirectionEnum.up;
    } else if (selectedItem.y == gap.y && (selectedItem.x == (gap.x - 1))) {
      direction = DirectionEnum.down;
    }
    if (direction != null) {
      this.moveTo(direction, gap, selectedItem);
    }

  }

  moveTo(direction: DirectionEnum, gap, selectedItem) {
    let aux = {x:0,y:0};
    switch (direction) {
      case DirectionEnum.up:
        $('#' + selectedItem.index).animate({
          top: -54
        }, 10);
        $('#16').animate({
          top: 54
        }, 10);
        break;
      case DirectionEnum.right:

        break;
      case DirectionEnum.down:
        $('#' + selectedItem.index).animate({
          top: 54
        }, 10);
        $('#16').animate({
          top: -54
        }, 10);
        break;
      case DirectionEnum.left:

        break;

      default:
        break;
    }
  }
  setCoordenates(index, element) {
    switch (index) {
      case 0:
        element.x = 0;
        element.y = 0;
        break;
      case 1:
        element.x = 0;
        element.y = 1;
        break;
      case 2:
        element.x = 0;
        element.y = 2;
        break;
      case 3:
        element.x = 0;
        element.y = 3;
        break;
      case 4:
        element.x = 1;
        element.y = 0;
        break;
      case 5:
        element.x = 1;
        element.y = 1;
        break;
      case 6:
        element.x = 1;
        element.y = 2;
        break;
      case 7:
        element.x = 1;
        element.y = 3;
        break;
      case 8:
        element.x = 2;
        element.y = 0;
        break;
      case 9:
        element.x = 2;
        element.y = 1;
        break;
      case 10:
        element.x = 2;
        element.y = 2;
        break;
      case 11:
        element.x = 2;
        element.y = 3;
        break;
      case 12:
        element.x = 3;
        element.y = 0;
        break;
      case 13:
        element.x = 3;
        element.y = 1;
        break;
      case 14:
        element.x = 3;
        element.y = 2;
        break;
      case 15:
        element.x = 3;
        element.y = 3;
        break;
      default:
        break;
    }
  }
}

