import { Game } from "./game";

export class MemoTest extends Game {
    colors: Array<string>;
    firstCardSelected:Card;
    secondCardSelected:Card;
    rightAnwerCount:number;

    constructor(name: string) {
        super(name);
        this.colors = [];
        this.firstCardSelected = new Card(-1,"");
        this.secondCardSelected = new Card(-1,"");
        this.rightAnwerCount = 0;
    }


    shuffleColors(){
        this.colors = this.colors.sort(()=>{ return Math.random() - 0.5});
    }
}
export class Card{
    constructor(public id:number,public color:string) {
        
    }
}
