import { Game } from "./game";

export class SlidePuzzle extends Game {
    public tiles: Array<Tile>;

    constructor(public name: string) {
        super(name);
        this.tiles = Tile.generateTiles(16);
    }

    shuffleTiles() {
        this.tiles = this.tiles.sort(() => { return Math.random() - 0.5 });
    }

    getGap(): Tile {
        let rv = new Tile(16);
        this.tiles.forEach(tile => {
            if (tile.index == 16) {
                rv = tile;
            }
        });
        return rv;
    }

}

export enum DirectionEnum {
    up,
    right,
    down,
    left
}

export class Tile {
    public src: string;
    public x: number;
    public y: number;

    constructor(public index: number) {
    }


    public static generateTiles(count: number) {
        let tiles: Array<Tile> = new Array<Tile>();
        for (var index = 1; index < count + 1; index++) {
            var tile = new Tile(index);
            tiles.push(tile);
        }
        return tiles;
    }


}
