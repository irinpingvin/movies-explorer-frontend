import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movies">
      <ul className="movies-list">
        {props.cards.map((card) => <MoviesCard key={card.id} card={card} onCardSaved={props.onCardSaved} isSavedMode={props.isSavedMode}/>)}
      </ul>
    </section>
  );
}

export default MoviesCardList;