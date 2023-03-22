import React from "react";

function MoviesCard({ card, savedCards, onCardSave, isSavedMode }) {
  let cardSaveButtonClassName;
  const movieDuration = getMovieDurationInHours();
  let cardImageUrl;
  let thumbnail;

  if (isSavedMode) {
    cardSaveButtonClassName = 'movie__button movie__button_added';
    cardImageUrl = card.image;
    thumbnail = card.thumbnail;
  } else {
    const isCardSaved = savedCards.some(element => element.movieId === card.id);
    cardSaveButtonClassName = `movie__button ${isCardSaved ? 'movie__button_saved' : 'movie__button_unsaved'}`;
    cardImageUrl = `https://api.nomoreparties.co${card.image.url}`;
    thumbnail = `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`;
  }

  function handleSave() {
    if (isSavedMode) {
      onCardSave(card);
    } else {
      onCardSave({
        nameRU: card.nameRU,
        country: card.country,
        director: card.director,
        duration: card.duration,
        year: card.year,
        description: card.description,
        image: cardImageUrl,
        trailerLink: card.trailerLink,
        nameEN: card.nameEN,
        thumbnail: thumbnail,
        movieId: card.id,
      });
    }
  }

  function getMovieDurationInHours() {
    const hours = Math.trunc(card.duration / 60);
    const minutes = card.duration % 60;

    if (card.duration < 60)
      return card.duration + 'м';

    return minutes > 0 ? hours + 'ч ' + minutes + 'м' : hours + 'ч';
  }

  return (
    <li className="movie">
      <h2 className="movie__name">{card.nameRU}</h2>
      <p className="movie__duration">{movieDuration}</p>
      <a className="movie__pic" style={{backgroundImage: `url(${cardImageUrl})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} href={card.trailerLink} target="_blank" rel="noreferrer"></a>
      <button className={cardSaveButtonClassName} type="button" onClick={handleSave}></button>
    </li>
  );
}

export default MoviesCard;