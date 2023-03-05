function MoviesCard({ card, onCardSaved }) {
  const isCardLiked = false;
  const cardLikeButtonClassName = `movie__save-button ${isCardLiked ? 'movie__save-button_saved' : ''}`;

  function handleSave() {
    onCardSaved(card);
  }

  return (
    <li className="movie">
      <h2 className="movie__name">{card.name}</h2>
      <p className="movie__duration">{card.duration}</p>
      <div className="movie__pic" style={{backgroundImage: `url(${card.link})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
      <button className={cardLikeButtonClassName} type="button" onClick={handleSave}></button>
    </li>
  );
}

export default MoviesCard;