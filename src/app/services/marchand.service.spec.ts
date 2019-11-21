import { TestBed } from '@angular/core/testing';

import { MarchandService } from './marchand.service';

describe('MarchandService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarchandService = TestBed.get(MarchandService);
    expect(service).toBeTruthy();
  });
});
