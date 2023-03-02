import React from "react";
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import Menu from "../Menu/Menu";

function Header() {
  // TODO
  const isNavigationNeeded = true;

  return (
    <header className="header">
      <div className="header__tabs">
        <Link className="header__logo-link" to="/"></Link>
        { isNavigationNeeded ? (
          <>
            <Navigation/>
            <Menu/>
          </>
        ) : null }
      </div>
    </header>
  );
}

export default Header;