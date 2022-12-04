import { TestBed } from '@angular/core/testing';

import { ServiceDepService } from './service-dep.service';

describe('ServiceDepService', () => {
  let service: ServiceDepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceDepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
