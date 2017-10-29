import { Game, MatchResultEnum, OptionEnum } from "./game";



export class RockPaperScissors extends Game{
    public computerRandomOption:OptionEnum;
    public userChosenOption:OptionEnum;

    constructor(public name:string) {
        super(name);
        this.computerRandomOption = OptionEnum.Rock;
        this.userChosenOption = OptionEnum.Rock;
        
    }


    getMatchResult(): MatchResultEnum {
        let rv: MatchResultEnum;
    
        if (this.computerRandomOption === this.userChosenOption) {
          rv = MatchResultEnum.Draw;
        }
        else {
          switch (this.computerRandomOption) {
            case OptionEnum.Rock:
              rv = this.userChosenOption === OptionEnum.Paper ? MatchResultEnum.Win : MatchResultEnum.Lose;
              break;
            case OptionEnum.Paper:
              rv = this.userChosenOption === OptionEnum.Scissor ? MatchResultEnum.Win : MatchResultEnum.Lose;
              break;
            case OptionEnum.Scissor:
              rv = this.userChosenOption === OptionEnum.Rock ? MatchResultEnum.Win : MatchResultEnum.Lose;
              break;
            default:
              break;
          }
        }
        return rv;
      }
}
