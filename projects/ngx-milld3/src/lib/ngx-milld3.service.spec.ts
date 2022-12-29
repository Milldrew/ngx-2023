import { TestBed } from '@angular/core/testing';

import { NgxMilld3Service } from './ngx-milld3.service';

describe('NgxMilld3Service', () => {
  let service: NgxMilld3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxMilld3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
