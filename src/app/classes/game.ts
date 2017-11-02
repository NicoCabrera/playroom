import { Timer } from "./timer";

export class Game {

    timer:Timer;
    win:boolean;
    

    constructor(public name: string) {
        
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
