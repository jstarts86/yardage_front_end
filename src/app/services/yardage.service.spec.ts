import { TestBed } from '@angular/core/testing';

import { YardageService } from './yardage.service';

describe('YardageService', () => {
  let service: YardageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YardageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
