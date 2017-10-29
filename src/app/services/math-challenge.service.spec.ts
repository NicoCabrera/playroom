import { TestBed, inject } from '@angular/core/testing';

import { MathChallengeService } from './math-challenge.service';

describe('MathChallengeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MathChallengeService]
    });
  });

  it('should be created', inject([MathChallengeService], (service: MathChallengeService) => {
    expect(service).toBeTruthy();
  }));
});
