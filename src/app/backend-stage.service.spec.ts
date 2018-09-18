import { TestBed, inject } from '@angular/core/testing';

import { BackendStageService } from './backend-stage.service';

describe('InserStageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendStageService]
    });
  });

  it('should be created', inject([BackendStageService], (service: BackendStageService) => {
    expect(service).toBeTruthy();
  }));
});
