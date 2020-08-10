import { TestBed } from '@angular/core/testing';

import { SSNRegistrationService } from './ssn-registration.service';

describe('SSNRegistrationService', () => {
  let service: SSNRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSNRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
