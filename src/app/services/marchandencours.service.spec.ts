import { TestBed } from '@angular/core/testing';

import { MarchandencoursService } from './marchandencours.service';

describe('MarchandencoursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MarchandencoursService = TestBed.get(MarchandencoursService);
    expect(service).toBeTruthy();
  });
});
