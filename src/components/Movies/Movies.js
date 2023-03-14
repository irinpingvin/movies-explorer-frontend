import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";

function Movies(props) {
  return (
    <main className="page-movies">
      <SearchForm onSearchForm={props.onSearchForm}/>
      <MoviesCardList movies={props.movies} savedMovies={props.savedMovies} onMovieSave={props.onMovieSave} isSavedMode={false}/>
      <More cards={props.movies}/>
    </main>
  );
}

export default Movies;