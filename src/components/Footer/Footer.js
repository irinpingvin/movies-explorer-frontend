import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__border"/>
      <div className="footer__navigation">
        <nav>
          <ul className="footer__links">
            <li className="footer__link-item">
              <a className="footer__link" href="https://practicum.yandex.ru/" target="_blank" rel='noreferrer'>Яндекс.Практикум</a>
            </li>
            <li className="footer__link-item">
              <a className="footer__link" href="https://github.com/irinpingvin" target="_blank" rel='noreferrer'>Github</a>
            </li>
          </ul>
        </nav>
        <p className="footer__copyright">&copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}

export default Footer;