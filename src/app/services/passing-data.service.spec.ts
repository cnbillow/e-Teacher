import { TestBed, inject } from '@angular/core/testing';

import { PassingDataService } from './passing-data.service';

describe('PassingDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PassingDataService]
    });
  });

  it('should be created', inject([PassingDataService], (service: PassingDataService) => {
    expect(service).toBeTruthy();
  }));
});
