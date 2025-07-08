import { TestBed } from '@angular/core/testing';

import { BadgeFeatureService } from './badge-feature.service';

describe('BadgeFeatureService', () => {
  let service: BadgeFeatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BadgeFeatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
