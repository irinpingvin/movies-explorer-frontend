import React from 'react';

function NavTab() {
  return (
    <nav>
      <ul className="navtab">
        <li className="navtab__item">
          <a className="navtab__link">О проекте</a>
        </li>
        <li className="navtab__item">
          <a className="navtab__link">Технологии</a>
        </li>
        <li className="navtab__item">
          <a className="navtab__link">Студент</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;