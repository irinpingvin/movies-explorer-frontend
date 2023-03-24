class MoviesFilter {
  getFilteredMoviesByName(movies, searchRequest) {
    return movies.filter(movie => movie.nameRU.toLowerCase().includes(searchRequest.toLowerCase()));
  }

  getFilteredMoviesByCheckbox(movies, isShortMoviesIncluded) {
    return movies.filter(movie => isShortMoviesIncluded ? movie : movie.duration > 40);
  }

  getFirstPartMoviesList(movies, amount) {
    return movies.slice(0, amount);
  }

  getNextPartMoviesList(movies, shownMoviesAmount, additionalAmount, isShortMoviesNeeded) {
    const filteredMovies = this.getFilteredMoviesByCheckbox(movies, isShortMoviesNeeded);
    return filteredMovies.slice(shownMoviesAmount, shownMoviesAmount + additionalAmount);
  }

  getRemainingMoviesAmount(movies, shownMoviesAmount, isShortMoviesNeeded) {
    const filteredMovies = this.getFilteredMoviesByCheckbox(movies, isShortMoviesNeeded);
    return filteredMovies.length - shownMoviesAmount;
  }
}

export const moviesFilter = new MoviesFilter();