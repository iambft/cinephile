import { TestBed } from '@angular/core/testing';

import { LikedMovieStoreService } from './liked-movie-store.service';

describe('MovieStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LikedMovieStoreService = TestBed.get(LikedMovieStoreService);
    expect(service).toBeTruthy();
  });
});
