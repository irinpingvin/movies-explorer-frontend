import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function SavedMovies(props) {
  return (
    <main className="saved-movies">
      <SearchForm onSearchForm={props.onSearchForm}/>
      <MoviesCardList movies={props.movies} onMovieSave={props.onMovieSave} isSavedMode={true}/>
    </main>
  );
}

export default SavedMovies;