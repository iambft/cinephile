import { Movie } from './movie.model';

describe('Movies', () => {
  it('should create an instance', () => {
    expect(new Movie()).toBeTruthy();
  });
});
