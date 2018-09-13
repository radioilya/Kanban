import { TestBed, inject } from '@angular/core/testing';

import { InserStageService } from './insert-stage.service';

describe('InserStageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InserStageService]
    });
  });

  it('should be created', inject([InserStageService], (service: InserStageService) => {
    expect(service).toBeTruthy();
  }));
});
