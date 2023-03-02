import React from "react";
import { Link } from "react-router-dom";

function ContentLinks() {
  return (
    <div className="content-links">
      <Link className="content-links__movies" to="/movies">Фильмы</Link>
      <Link className="content-links__saved-movies" to="/saved-movies">Сохранённые фильмы</Link>
    </div>
  );
}

export default ContentLinks;