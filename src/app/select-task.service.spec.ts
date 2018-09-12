import { TestBed, inject } from '@angular/core/testing';

import { SelectTaskService } from './select-task.service';

describe('SelectTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectTaskService]
    });
  });

  it('should be created', inject([SelectTaskService], (service: SelectTaskService) => {
    expect(service).toBeTruthy();
  }));
});
