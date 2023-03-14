class MoviesFilter {
  getFilteredMovies(movies, searchRequest, isShortMoviesIncluded) {
    return movies.filter(function(movie) {
      if (isShortMoviesIncluded)
        return movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase());
      else
        return movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase()) && movie.duration > 40;
    });
  }
}

export const moviesFilter = new MoviesFilter();