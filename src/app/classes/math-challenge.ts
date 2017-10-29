import { Game } from "./game";

export class MathChallenge extends Game{

    public calculations:Array<any>;
    public calculation:string;
    private rigthAnswer:any;
    public userAnswer:any;

    constructor(public name:string) {
        super(name);
        
    }


    setCalculation(){
        this.calculations = this.calculations.sort(() => { return Math.random() - 0.5 });
        let item = this.calculations.pop();
        this.calculation = item.calculation;
        this.rigthAnswer = item.result;
    }

    showResult(){
        console.log(this.rigthAnswer);
    }


    validateAnwer(){
        return this.userAnswer == this.rigthAnswer;
    }


}
