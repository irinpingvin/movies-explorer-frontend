import React from "react";
import { Link } from "react-router-dom";

function NavigationLinks() {
  return(
    <div className="navigation-links">
      <Link className="navigation-links__movies" to="/movies">Фильмы</Link>
      <Link className="navigation-links__saved-movies" to="/saved-movies">Сохранённые фильмы</Link>
    </div>
  );
}

export default NavigationLinks;