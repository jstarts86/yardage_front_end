import { TestBed } from '@angular/core/testing';

import { CalculationTransferService } from './calculation-transfer.service';

describe('CalculationTransferService', () => {
  let service: CalculationTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
