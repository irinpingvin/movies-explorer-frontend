import React from "react";
import ProfileLink from "../ProfileLink/ProfileLink";
import AuthLinks from "../AuthLinks/AuthLinks";
import ContentLinks from "../ContentLinks/ContentLinks";
import Menu from "../Menu/Menu";

function Navigation(props) {
  return(
    <>
      { props.loggedIn ? (
        <>
          <div className="navigation">
            <ContentLinks/>
            <ProfileLink/>
          </div>
          <Menu onMenuClick={props.onMenu}/>
        </>
        )
        : <AuthLinks/> }
    </>
  );
}

export default Navigation;