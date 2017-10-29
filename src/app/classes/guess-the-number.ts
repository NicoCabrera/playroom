import { Game } from "./game";

export class GuessTheNumber extends Game {
    public randomValue: any;
    public userNumber:any;

    
    constructor(public name: string,public max:number,public min:number) {
        super(name);
        this.randomValue = "";
        this.userNumber = "";
    }


    public generateRandomValue() {
        let randomNumber = Math.random() * (this.max - this.min) + this.min;
        this.randomValue = Math.floor(randomNumber);
    }

    public verify() {
        return this.userNumber == this.randomValue;
    }
}
