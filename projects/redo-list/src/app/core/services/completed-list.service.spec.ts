import { TestBed } from '@angular/core/testing';

import { CompletedListService } from './completed-list.service';

describe('CompletedListService', () => {
  let service: CompletedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompletedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
