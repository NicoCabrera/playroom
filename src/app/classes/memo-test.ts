import { Game } from "./game";

export class MemoTest extends Game {
    colors: Array<string>;

    constructor(name: string) {
        super(name);
        this.colors = [];
    }


    shuffleColors(){
        this.colors = this.colors.sort(()=>{ return Math.random() - 0.5});
    }
}
