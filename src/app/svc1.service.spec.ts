import { TestBed } from '@angular/core/testing';

import { SVC1Service } from './svc1.service';

describe('SVC1Service', () => {
  let service: SVC1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SVC1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
