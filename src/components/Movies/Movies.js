import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";
import React from "react";
import {moviesApi} from "../../utils/MoviesApi";
import {moviesFilter} from "../../utils/MoviesFilter";
import {mainApi} from "../../utils/MainApi";
import Preloader from "../Preloader/Preloader";
import {NOTHING_FOUND_TEXT} from "../../utils/constants";

function Movies() {
  const [movies, setMovies] = React.useState([]);
  const [shownMovies, setShownMovies] = React.useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [isPreloaderNeeded, setIsPreloaderNeeded] = React.useState(false);
  const [isNotificationNeeded, setIsNotificationNeeded] = React.useState(false);
  const [notificationText, setNotificationText] = React.useState('');
  const [windowInnerWidth, setWindowInnerWidth] = React.useState(window.innerWidth);
  const [moviesLeft, setMoviesLeft] = React.useState(0);
  const firstMoviesAmount = windowInnerWidth >= 1280 ? 12 : windowInnerWidth >= 768 ? 8 : 5;
  const additionalMoviesAmount = windowInnerWidth >= 1280 ? 3 : 2;

  React.useEffect(() => {
    const localMovies = JSON.parse(localStorage.getItem('movies'));
    const localShownMovies = JSON.parse(localStorage.getItem('shownMovies'));
    const shortMovies = localStorage.getItem('shortMovies');

    if (localMovies) {
      setMovies(localMovies);
    }

    if (localShownMovies) {
      setShownMovies(localShownMovies);

      if (localShownMovies.length === 0) {
        setIsNotificationNeeded(true);
        setNotificationText(NOTHING_FOUND_TEXT);
      } else {
        setMoviesLeft(moviesFilter.getRemainingMoviesAmount(localMovies, localShownMovies.length, shortMovies === 'true'));
      }
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
        resizeTimeout = setTimeout(function () {
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
        const filteredMoviesByName = moviesFilter.getFilteredMoviesByName(moviesList, searchRequest);
        setMovies(filteredMoviesByName);

        if (filteredMoviesByName.length === 0) {
          setEmptyResult();
        } else {
          renderMovies(filteredMoviesByName, isShortMoviesNeeded);
        }

        localStorage.setItem('movies', JSON.stringify(filteredMoviesByName));
        localStorage.setItem('searchRequest', searchRequest);
        localStorage.setItem('shortMovies', isShortMoviesNeeded);

        setIsPreloaderNeeded(false);
      })
      .catch(() => {
        setUnsuccessfulResult();
      });
  }

  function renderMovies(filteredMoviesByName, isShortMoviesNeeded) {
    const filteredMoviesByCheckBox = moviesFilter.getFilteredMoviesByCheckbox(filteredMoviesByName, isShortMoviesNeeded);

    if (filteredMoviesByCheckBox.length === 0) {
      setEmptyResult();
    }
    const partMoviesList = moviesFilter.getFirstPartMoviesList(filteredMoviesByCheckBox, firstMoviesAmount);

    setShownMovies(partMoviesList);
    setMoviesLeft(moviesFilter.getRemainingMoviesAmount(filteredMoviesByName, partMoviesList.length, isShortMoviesNeeded));

    localStorage.setItem('shownMovies', JSON.stringify(partMoviesList));
    localStorage.setItem('shortMovies', isShortMoviesNeeded);
  }

  function setEmptyResult() {
    setIsNotificationNeeded(true);
    setNotificationText(NOTHING_FOUND_TEXT);
    setShownMovies([]);
    localStorage.setItem('shownMovies', JSON.stringify([]));
  }

  function setUnsuccessfulResult() {
    setIsPreloaderNeeded(false);
    setIsNotificationNeeded(true);
    setNotificationText("Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз");
    setMovies([]);
    setShownMovies([]);
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
    const shortMovies = JSON.parse(localStorage.getItem('shortMovies'));
    const moviesPortion = moviesFilter.getNextPartMoviesList(movies, shownMovies.length, additionalMoviesAmount, shortMovies);
    const localShownMovies = JSON.parse(localStorage.getItem('shownMovies'));

    moviesPortion.forEach(item => {
      setShownMovies(shownMovies => [...shownMovies, item]);
      localShownMovies.push(item);
    });

    setMoviesLeft(moviesFilter.getRemainingMoviesAmount(movies, localShownMovies.length, shortMovies));

    localStorage.setItem('shownMovies', JSON.stringify(localShownMovies));
  }

  function handleMovieCheckbox(isShortMoviesNeeded) {
    renderMovies(movies, isShortMoviesNeeded);
  }

  return (
    <main className="page-movies">
      <SearchForm onSearchForm={handleMoviesSearch} onCheckboxClick={handleMovieCheckbox}/>
      {isPreloaderNeeded ?
        <Preloader/>
        :
        <MoviesCardList movies={shownMovies} savedMovies={savedMovies} onMovieSave={handleMovieSaving}
                        isSavedMode={false}/>
      }
      <More moviesLeft={moviesLeft} onMoreClick={handleMoreMovies}/>
      <p
        className={`movie__error-message ${isNotificationNeeded ? 'movie__error-message_active' : ''}`}>{notificationText}</p>
    </main>
  );
}

export default Movies;