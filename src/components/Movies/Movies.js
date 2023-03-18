import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import React from "react";
import {moviesApi} from "../../utils/MoviesApi";
import {moviesFilter} from "../../utils/MoviesFilter";
import {mainApi} from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";

function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [shownMovies, setShownMovies] = React.useState([]);
  const [moviesToShow, setMoviesToShow] = React.useState(0);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isPreloaderNeeded, setIsPreloaderNeeded] = React.useState(false);
  const [isNotificationNeeded, setIsNotificationNeeded] = React.useState(false);
  const [notificationText, setNotificationText] = React.useState('');

  React.useEffect(() => {
    mainApi.getMovies()
      .then(moviesList => setSavedMovies(moviesList))
      .catch(error => console.log(error));
  }, []);

  function handleMoviesSearch(searchRequest) {
    setIsPreloaderNeeded(true);
    setIsNotificationNeeded(false);

    moviesApi.getMovies()
      .then(moviesList => {
        const filteredMovies = moviesFilter.getFilteredMovies(moviesList, searchRequest, true);
        setMovies(filteredMovies);
        if (filteredMovies.length === 0) {
          setIsNotificationNeeded(true);
          setNotificationText('Ничего не найдено');
        } else {
          const moviesPortion = moviesFilter.getPartMoviesList(filteredMovies, 0, 12);
          setShownMovies(moviesPortion);
          setMoviesToShow(3);
        }
        setIsPreloaderNeeded(false);
      })
      .catch(() => {
        setIsPreloaderNeeded(false);
        setIsNotificationNeeded(true);
        setNotificationText("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
        setMovies([]);
        setShownMovies([]);
      });
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

  function handleMoreMovies() {
    const moviesPortion = moviesFilter.getPartMoviesList(movies, shownMovies.length, moviesToShow);
    moviesPortion.forEach(item => setShownMovies(shownMovies => [...shownMovies, item]));
  }

  return (
    <main className="page-movies">
      <SearchForm onSearchForm={handleMoviesSearch}/>
      {isPreloaderNeeded ?
        <Preloader/>
        :
        <MoviesCardList movies={shownMovies} savedMovies={savedMovies} onMovieSave={handleMovieSaving} isSavedMode={false}/>
      }
      <More moviesLeft={movies.length - shownMovies.length} moviesToShow={moviesToShow} onMoreClick={handleMoreMovies}/>
      <p className={`movie__error-message ${isNotificationNeeded ? 'movie__error-message_active' : ''}`}>{notificationText}</p>
    </main>
  );
}

export default Movies;