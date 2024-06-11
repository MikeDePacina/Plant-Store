import { TestBed } from '@angular/core/testing';

import { FetchPlantsService } from './fetch-plants.service';

describe('FetchPlantsService', () => {
  let service: FetchPlantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchPlantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
