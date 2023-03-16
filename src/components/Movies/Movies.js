import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import React from "react";
import {moviesApi} from "../../utils/MoviesApi";
import {moviesFilter} from "../../utils/MoviesFilter";
import {mainApi} from "../../utils/MainApi";

function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);

  React.useEffect(() => {
    mainApi.getMovies()
      .then(moviesList => setSavedMovies(moviesList))
      .catch(error => console.log(error));
  }, []);

  function handleMoviesSearch(searchRequest) {
    moviesApi.getMovies()
      .then(moviesList => setMovies(moviesFilter.getFilteredMovies(moviesList, searchRequest, true)))
      .catch(error => console.log(error));
  }

  function handleMovieSaving(movieInfo) {
    const isMovieSaved = savedMovies.some(element => element.movieId === movieInfo.movieId);

    if (isMovieSaved) {
      const movieToDelete = savedMovies.find(element => element.movieId === movieInfo.movieId);
      mainApi.deleteMovie(movieToDelete._id)
        .then(() => setSavedMovies(savedMovies.filter(element => element._id !== movieToDelete._id)))
        .catch(error => console.log(error));
    } else {
      mainApi.saveMovie(movieInfo)
        .then(movie => {
          setSavedMovies(savedMovies => [...savedMovies, movie]);
        })
        .catch(error => console.log(error));
    }
  }

  return (
    <main className="page-movies">
      <SearchForm onSearchForm={handleMoviesSearch}/>
      <MoviesCardList movies={movies} savedMovies={savedMovies} onMovieSave={handleMovieSaving} isSavedMode={false}/>
      <More cards={movies}/>
    </main>
  );
}

export default Movies;