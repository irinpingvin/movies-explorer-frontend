import React from "react";
import { Link } from "react-router-dom";
import Navigation from '../Navigation/Navigation';
import Menu from "../Menu/Menu";

function Header(props) {
  return (
    <header className={`header ${props.isNavigationNeeded ? 'header_type_with-navigation' : ''}`}>
      <div className={`header__tabs ${props.isNavigationNeeded ? 'header__tabs_type_with-navigation' : ''}`}>
        <Link className="header__logo-link" to="/"></Link>
        { props.isNavigationNeeded ? (
          <>
            <Navigation loggedIn={props.loggedIn}/>
            <Menu onMenuClick={props.onMenu}/>
          </>
        ) : null }
      </div>
    </header>
  );
}

export default Header;