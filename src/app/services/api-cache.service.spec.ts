import { TestBed } from '@angular/core/testing';

import { ApiCache } from './api-cache.service';

describe('ApiCacheService', () => {
  let service: ApiCache;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCache);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
