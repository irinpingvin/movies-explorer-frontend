import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import {mainApi} from "../../utils/MainApi";

function SavedMovies(props) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    mainApi.getMovies()
      .then(moviesList => setMovies(moviesList))
      .catch(error => console.log(error));
  }, []);


  function handleMovieDelete(movieInfo) {
    mainApi.deleteMovie(movieInfo._id)
      .then(() => {
        setMovies(movies.filter(element => element._id !== movieInfo._id));
      })
      .catch(error => console.log(error));
  }

  return (
    <main className="saved-movies">
      <SearchForm onSearchForm={props.onSearchForm}/>
      <MoviesCardList movies={movies} onMovieSave={handleMovieDelete} isSavedMode={true}/>
    </main>
  );
}

export default SavedMovies;