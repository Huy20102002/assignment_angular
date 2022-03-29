import { TestBed } from '@angular/core/testing';

import { StartQuizService } from './start-quiz.service';

describe('StartQuizService', () => {
  let service: StartQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StartQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
