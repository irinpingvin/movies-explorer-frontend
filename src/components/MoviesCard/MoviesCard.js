function MoviesCard({ card, onCardSaved, isSavedMode }) {
  const isCardSaved = false;
  let cardSaveButtonClassName;
  if (isSavedMode) {
    cardSaveButtonClassName = 'movie__button movie__button_added';
  } else {
    cardSaveButtonClassName = `movie__button ${isCardSaved ? 'movie__button_saved' : 'movie__button_unsaved'}`;
  }

  function handleSave() {
    onCardSaved(card);
  }

  return (
    <li className="movie">
      <h2 className="movie__name">{card.name}</h2>
      <p className="movie__duration">{card.duration}</p>
      <div className="movie__pic" style={{backgroundImage: `url(${card.link})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
      <button className={cardSaveButtonClassName} type="button" onClick={handleSave}></button>
    </li>
  );
}

export default MoviesCard;