import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";

function Movies(props) {
  return (
    <>
      <SearchForm onSearchForm={props.onSearchForm}/>
      <MoviesCardList cards={props.cards} onCardSaved={props.onCardSaved}/>
      <Preloader/>
    </>
  );
}

export default Movies;