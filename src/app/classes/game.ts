import { Timer } from "./timer";

export class Game {

    timer:Timer;
    win:boolean;
    score:number;
    
    constructor(public name: string) {
        this.score = 0;
    }


    initTimer(seconds:number){
        this.timer = new Timer(seconds);
    }

    startTimer(callback){
        return this.timer.start(callback);
    }

}

export enum OptionEnum {
    Rock = 0,
    Paper,
    Scissor
}

export enum MatchResultEnum {
    Lose = -1,
    Draw,
    Win
}
