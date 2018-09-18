import { TestBed, inject } from '@angular/core/testing';

import { BackendTaskService } from './backend-task.service';

describe('BackendTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BackendTaskService]
    });
  });

  it('should be created', inject([BackendTaskService], (service: BackendTaskService) => {
    expect(service).toBeTruthy();
  }));
});
