import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import More from "../More/More";

function SavedMovies(props) {
  return (
    <>
      <SearchForm onSearchForm={props.onSearchForm}/>
      <MoviesCardList cards={props.cards} onCardSaved={props.onCardSaved} isSavedMode={true}/>
      {/*<Preloader/>*/}
      <More cards={props.cards}/>
    </>
  );
}

export default SavedMovies;