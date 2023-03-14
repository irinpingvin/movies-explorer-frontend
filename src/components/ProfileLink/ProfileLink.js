import React from "react";
import {Link} from "react-router-dom";

function ProfileLink(props) {
  return (
    <Link className="profile-link" to="/profile" onClick={props.onClose}>Аккаунт</Link>
  );
}

export default ProfileLink;
