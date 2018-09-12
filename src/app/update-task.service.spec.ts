import { TestBed, inject } from '@angular/core/testing';

import { UpdateTaskService } from './update-task.service';

describe('UpdateTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UpdateTaskService]
    });
  });

  it('should be created', inject([UpdateTaskService], (service: UpdateTaskService) => {
    expect(service).toBeTruthy();
  }));
});
