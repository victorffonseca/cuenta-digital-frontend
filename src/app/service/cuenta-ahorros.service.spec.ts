import { TestBed } from '@angular/core/testing';

import { CuentaAhorrosService } from './cuenta-ahorros.service';

describe('CuentaAhorrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CuentaAhorrosService = TestBed.get(CuentaAhorrosService);
    expect(service).toBeTruthy();
  });
});
