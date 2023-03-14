import React from "react";

function MoviesCard({ card, onCardSaved, isSavedMode }) {
  const [isCardSaved, setIsCardSaved] = React.useState(false);
  let cardSaveButtonClassName;
  const movieDuration = getMovieDurationInHours();

  if (isSavedMode) {
    cardSaveButtonClassName = 'movie__button movie__button_added';
  } else {
    cardSaveButtonClassName = `movie__button ${isCardSaved ? 'movie__button_saved' : 'movie__button_unsaved'}`;
  }

  function handleSave() {
    onCardSaved(card);
    if (!isSavedMode) {
      setIsCardSaved(!isCardSaved);
    }
  }

  function getMovieDurationInHours() {
    let duration = card.duration;
    let hours = 0;
    let minutes = 0;

    if (duration < 60)
      return duration + 'м';

    while (duration >= 60) {
      duration -= 60;
      hours++;
      minutes = duration;
    }

    if (minutes > 0)
      return hours + 'ч ' + minutes + 'м';
    else
      return hours + 'ч';
  }

  return (
    <li className="movie">
      <h2 className="movie__name">{card.nameRU}</h2>
      <p className="movie__duration">{movieDuration}</p>
      <div className="movie__pic" style={{backgroundImage: `url(https://api.nomoreparties.co/${card.image.url})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
      <button className={cardSaveButtonClassName} type="button" onClick={handleSave}></button>
    </li>
  );
}

export default MoviesCard;