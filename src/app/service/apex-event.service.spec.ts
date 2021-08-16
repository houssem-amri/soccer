import { TestBed } from '@angular/core/testing';

import { ApexEventService } from './apex-event.service';

describe('ApexEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApexEventService = TestBed.get(ApexEventService);
    expect(service).toBeTruthy();
  });
});
