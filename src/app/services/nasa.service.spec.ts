import { TestBed } from '@angular/core/testing';

import { NasaService } from './nasa.service';

describe('NasaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NasaService = TestBed.get(NasaService);
    expect(service).toBeTruthy();
  });
});
