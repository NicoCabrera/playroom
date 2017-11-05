import { Game, MatchResultEnum, OptionEnum } from "./game";



export class RockPaperScissors extends Game {
  public computerRandomOption: OptionEnum;
  public userChosenOption: OptionEnum;
  public partialWins: number;
  public partialLoses: number;

  constructor(public name: string) {
    super(name);
    this.computerRandomOption = OptionEnum.Rock;
    this.userChosenOption = OptionEnum.Rock;
    this.partialWins = 0;
    this.partialLoses = 0;
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

  public selectRamdomOption() {
    let randomNumber = Math.random() * (3 - 0);
    this.computerRandomOption = Math.floor(randomNumber);
  }
}
