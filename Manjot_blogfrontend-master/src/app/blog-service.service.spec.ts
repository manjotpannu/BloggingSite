import { TestBed } from '@angular/core/testing';

import { BlogServiceService } from './editblog/blog-service.service';

describe('BlogServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogServiceService = TestBed.get(BlogServiceService);
    expect(service).toBeTruthy();
  });
});
