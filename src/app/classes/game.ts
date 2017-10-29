export class Game {

    constructor(public name: string) {

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
