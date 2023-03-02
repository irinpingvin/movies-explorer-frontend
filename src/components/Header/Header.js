import React from "react";
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import Menu from "../Menu/Menu";

function Header(props) {
  return (
    <header className="header">
      <div className="header__tabs">
        <Link className="header__logo-link" to="/"></Link>
        { props.isNavigationNeeded ? (
          <>
            <Navigation/>
            <Menu onMenuClick={props.onMenu}/>
          </>
        ) : null }
      </div>
    </header>
  );
}

export default Header;