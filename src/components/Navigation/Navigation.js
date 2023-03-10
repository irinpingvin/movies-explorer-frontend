import React from "react";
import ProfileLink from "../ProfileLink/ProfileLink";
import AuthLinks from "../AuthLinks/AuthLinks";
import ContentLinks from "../ContentLinks/ContentLinks";

function Navigation(props) {
  return(
    <>
      { props.loggedIn ? (
        <div className="navigation">
          <ContentLinks/>
          <ProfileLink/>
        </div>
        )
        : <AuthLinks/> }
    </>
  );
}

export default Navigation;