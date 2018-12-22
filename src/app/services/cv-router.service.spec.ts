import { TestBed } from '@angular/core/testing';

import { CvRouterService } from './cv-router.service';

describe('CvRouterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CvRouterService = TestBed.get(CvRouterService);
    expect(service).toBeTruthy();
  });
});
