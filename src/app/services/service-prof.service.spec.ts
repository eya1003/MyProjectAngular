import { TestBed } from '@angular/core/testing';

import { ServiceProfService } from './service-prof.service';

describe('ServiceProfService', () => {
  let service: ServiceProfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceProfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
