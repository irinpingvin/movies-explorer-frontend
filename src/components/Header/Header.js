import React from "react";
import { Link } from "react-router-dom";
import ProfileLink from '../ProfileLink/ProfileLink';
import NavigationLinks from '../NavigationLinks/NavigationLinks';
import AuthLinks from '../AuthLinks/AuthLinks'

function Header() {
  // TODO
  const isLoggedIn = true;
  return (
    <header className="header">
      <div className="header__tabs">
        <Link className="header__logo-link" to="/"></Link>
        { isLoggedIn ? <NavigationLinks/> : null }
      </div>
      { isLoggedIn ? <ProfileLink/> : <AuthLinks/> }
    </header>
  );
}

export default Header;