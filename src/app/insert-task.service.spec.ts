import { TestBed, inject } from '@angular/core/testing';

import { InsertTaskService } from './insert-task.service';

describe('InsertTaskService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InsertTaskService]
    });
  });

  it('should be created', inject([InsertTaskService], (service: InsertTaskService) => {
    expect(service).toBeTruthy();
  }));
});
