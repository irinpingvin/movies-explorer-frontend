import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {mainApi} from "../../utils/MainApi";
import {moviesFilter} from "../../utils/MoviesFilter";

function SavedMovies() {
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [shownMovies, setShownMovies] = React.useState([]);
  const [isNotificationNeeded, setIsNotificationNeeded] = React.useState(false);
  const [notificationText, setNotificationText] = React.useState('');

  React.useEffect(() => {
    mainApi.getMovies()
      .then(movies => {
        setSavedMovies(movies);
        setShownMovies(movies);
      })
      .catch(error => console.log(error));
  }, []);


  function handleMovieDelete(movieInfo) {
    mainApi.deleteMovie(movieInfo._id)
      .then(() => {
        setSavedMovies(savedMovies.filter(element => element._id !== movieInfo._id));
      })
      .catch(error => console.log(error));
  }

  function handleMoviesSearch(searchRequest, isShortMoviesNeeded) {
    const filteredMovies = moviesFilter.getFilteredMovies(savedMovies, searchRequest, isShortMoviesNeeded);

    setIsNotificationNeeded(false);
    setShownMovies(filteredMovies);

    if (filteredMovies.length === 0) {
      setIsNotificationNeeded(true);
      setNotificationText('Ничего не найдено');
    }
  }

  return (
    <main className="saved-movies">
      <SearchForm onSearchForm={handleMoviesSearch}/>
      <MoviesCardList movies={shownMovies} onMovieSave={handleMovieDelete} isSavedMode={true}/>
      <p className={`saved-movies__error-message ${isNotificationNeeded ? 'saved-movies__error-message_active' : ''}`}>{notificationText}</p>
    </main>
  );
}

export default SavedMovies;