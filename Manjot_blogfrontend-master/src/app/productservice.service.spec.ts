import { TestBed } from '@angular/core/testing';

import { ProductserviceService } from './blogdetails/productservice.service';

describe('ProductserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductserviceService = TestBed.get(ProductserviceService);
    expect(service).toBeTruthy();
  });
});
