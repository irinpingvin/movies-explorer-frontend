import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movies">
      <ul className="movies-list">
        {props.movies.map((card) => <MoviesCard key={card.id} card={card} savedCards={props.savedMovies} onCardSave={props.onMovieSave} isSavedMode={props.isSavedMode}/>)}
      </ul>
    </section>
  );
}

export default MoviesCardList;