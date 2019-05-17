import { TestBed } from '@angular/core/testing';

import { MascaraService } from './mascara.service';

describe('MascaraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MascaraService = TestBed.get(MascaraService);
    expect(service).toBeTruthy();
  });
});
