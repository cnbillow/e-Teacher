import { TestBed, inject } from '@angular/core/testing';

import { RoleGuardsService } from './role-guards.service';

describe('RoleGuardsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RoleGuardsService]
    });
  });

  it('should be created', inject([RoleGuardsService], (service: RoleGuardsService) => {
    expect(service).toBeTruthy();
  }));
});
