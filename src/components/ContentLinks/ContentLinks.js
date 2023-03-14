import React from "react";
import {Link, useLocation} from "react-router-dom";

function ContentLinks() {
  let moviesLinkClassName = 'content-links__movies';
  let savedMoviesLinkClassName = 'content-links__saved-movies';
  const location = useLocation();

  if (location.pathname === '/movies') {
    moviesLinkClassName = 'content-links__movies content-links_type_active';
  } else if (location.pathname === '/saved-movies') {
    savedMoviesLinkClassName = 'content-links__saved-movies content-links_type_active'
  } else {
    moviesLinkClassName = 'content-links__movies';
    savedMoviesLinkClassName = 'content-links__saved-movies';
  }

  return (
    <div className="content-links">
      <Link className={moviesLinkClassName} to="/movies">Фильмы</Link>
      <Link className={savedMoviesLinkClassName} to="/saved-movies">Сохранённые фильмы</Link>
    </div>
  );
}

export default ContentLinks;