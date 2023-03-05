import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movies">
      <ul className="movies-list">
        {props.cards.map((card) => <MoviesCard key={card.id} card={card} onCardSaved={props.onCardSaved}/>)}
      </ul>
    </section>
  );
}

export default MoviesCardList;