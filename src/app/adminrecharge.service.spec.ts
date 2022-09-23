import { TestBed } from '@angular/core/testing';

import { AdminrechargeService } from './adminrecharge.service';

describe('AdminrechargeService', () => {
  let service: AdminrechargeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminrechargeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
