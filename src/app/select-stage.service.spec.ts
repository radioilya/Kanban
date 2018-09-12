import { TestBed, inject } from '@angular/core/testing';

import { SelectStageService } from './select-stage.service';

describe('SelectStageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectStageService]
    });
  });

  it('should be created', inject([SelectStageService], (service: SelectStageService) => {
    expect(service).toBeTruthy();
  }));
});
