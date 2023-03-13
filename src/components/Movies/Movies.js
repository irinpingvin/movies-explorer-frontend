import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "../More/More";

function Movies(props) {
  return (
    <main className="page-movies">
      <SearchForm onSearchForm={props.onSearchForm}/>
      <MoviesCardList cards={props.cards} onCardSaved={props.onCardSaved} isSavedMode={false}/>
      <More cards={props.cards}/>
    </main>
  );
}

export default Movies;