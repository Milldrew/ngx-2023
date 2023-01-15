import { TestBed } from '@angular/core/testing';

import { MillterialService } from './millterial.service';

describe('MillterialService', () => {
  let service: MillterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MillterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
