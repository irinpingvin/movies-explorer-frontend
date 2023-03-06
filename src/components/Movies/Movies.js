import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import More from "../More/More";

function Movies(props) {
  return (
    <>
      <SearchForm onSearchForm={props.onSearchForm}/>
      <MoviesCardList cards={props.cards} onCardSaved={props.onCardSaved}/>
      {/*<Preloader/>*/}
      <More cards={props.cards}/>
    </>
  );
}

export default Movies;