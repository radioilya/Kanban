import { TestBed, inject } from '@angular/core/testing';

import { BackendBoardService } from './backend-board.service';

describe('BackendBoardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendBoardService]
    });
  });

  it('should be created', inject([BackendBoardService], (service: BackendBoardService) => {
    expect(service).toBeTruthy();
  }));
});
