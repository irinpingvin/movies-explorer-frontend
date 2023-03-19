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
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isPreloaderNeeded, setIsPreloaderNeeded] = React.useState(false);
  const [isNotificationNeeded, setIsNotificationNeeded] = React.useState(false);
  const [notificationText, setNotificationText] = React.useState('');
  const [windowInnerWidth, setWindowInnerWidth] = React.useState(window.innerWidth);
  const firstMoviesAmount = windowInnerWidth >= 1280 ? 12 : windowInnerWidth >= 768 ? 8 : 5;
  const additionalMoviesAmount = windowInnerWidth >= 1280 ? 3 : 2;

  React.useEffect(() => {
    const movies = localStorage.getItem('movies');
    const shownMovies = localStorage.getItem('shownMovies');

    if (movies) {
     setMovies(JSON.parse(movies));
    }

    if (shownMovies) {
      setShownMovies(JSON.parse(shownMovies));
    }
  }, []);

  React.useEffect(() => {
    mainApi.getMovies()
      .then(moviesList => setSavedMovies(moviesList))
      .catch(error => console.log(error));
  }, []);

  React.useEffect(() => {
    let resizeTimeout;

    window.addEventListener("resize", handleWindowChange);

    function handleWindowChange() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function() {
          resizeTimeout = null;
          setWindowInnerWidth(window.innerWidth);
        }, 66);
      }
    }

    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  }, []);

  function handleMoviesSearch(searchRequest, isShortMoviesNeeded) {
    setIsPreloaderNeeded(true);
    setIsNotificationNeeded(false);

    moviesApi.getMovies()
      .then(moviesList => {
        const filteredMovies = moviesFilter.getFilteredMovies(moviesList, searchRequest, isShortMoviesNeeded);
        setMovies(filteredMovies);
        if (filteredMovies.length === 0) {
          setIsNotificationNeeded(true);
          setNotificationText('Ничего не найдено');
        } else {
          const partMoviesList = moviesFilter.getPartMoviesList(filteredMovies, 0, firstMoviesAmount);
          setShownMovies(partMoviesList);
          localStorage.setItem('movies', JSON.stringify(filteredMovies));
          localStorage.setItem('shownMovies', JSON.stringify(partMoviesList));
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
    const moviesPortion = moviesFilter.getPartMoviesList(movies, shownMovies.length, additionalMoviesAmount);
    const localShownMovies = JSON.parse(localStorage.getItem('shownMovies'));
    moviesPortion.forEach(item => {
      setShownMovies(shownMovies => [...shownMovies, item]);
      localShownMovies.push(item);
    });
    localStorage.setItem('shownMovies', JSON.stringify(localShownMovies));
  }

  return (
    <main className="page-movies">
      <SearchForm onSearchForm={handleMoviesSearch}/>
      {isPreloaderNeeded ?
        <Preloader/>
        :
        <MoviesCardList movies={shownMovies} savedMovies={savedMovies} onMovieSave={handleMovieSaving} isSavedMode={false}/>
      }
      <More moviesLeft={movies.length - shownMovies.length} onMoreClick={handleMoreMovies}/>
      <p className={`movie__error-message ${isNotificationNeeded ? 'movie__error-message_active' : ''}`}>{notificationText}</p>
    </main>
  );
}

export default Movies;