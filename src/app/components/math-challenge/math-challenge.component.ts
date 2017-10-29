import { Component, OnInit } from '@angular/core';
import { MathChallengeService } from '../../services/math-challenge.service';
import { MathChallenge } from '../../classes/math-challenge';

@Component({
  selector: 'app-math-challenge',
  templateUrl: './math-challenge.component.html',
  styleUrls: ['./math-challenge.component.css'],
  providers: [MathChallengeService]
})
export class MathChallengeComponent implements OnInit {

  public game: MathChallenge;
  constructor(public mathChallengeService: MathChallengeService) {
    this.game = new MathChallenge("Agilidad aritmética");
  }

  ngOnInit() {
    this.mathChallengeService.getCalculations()
      .then((calculations) => {
        this.game.calculations = calculations;
        console.log(calculations)
        this.game.setCalculation();
      });
  }

  viewSelectedCalculation(){
    console.log(this.game.calculation);
  }

  viewSelectedCalculationResult(){
    this.game.showResult();
  }

  

}
