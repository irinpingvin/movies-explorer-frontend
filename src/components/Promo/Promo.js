import React from 'react';

function Promo() {
  return (
    <section className="promo">
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <nav>
          <ul className="promo__navigation">
            <li className="promo__navigation-item">
              <a className="promo__navigation-link">О проекте</a>
            </li>
            <li className="promo__navigation-item">
              <a className="promo__navigation-link">Технологии</a>
            </li>
            <li className="promo__navigation-item">
              <a className="promo__navigation-link">Студент</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Promo;