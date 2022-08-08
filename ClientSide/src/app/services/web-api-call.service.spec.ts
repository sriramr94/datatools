import { TestBed } from '@angular/core/testing';

import { WebApiCallService } from './web-api-call.service';

describe('WebApiCallService', () => {
  let service: WebApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
