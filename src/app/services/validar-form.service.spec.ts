import { TestBed } from '@angular/core/testing';

import { ValidarFormService } from './validar-form.service';

describe('ValidarFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidarFormService = TestBed.get(ValidarFormService);
    expect(service).toBeTruthy();
  });
});
