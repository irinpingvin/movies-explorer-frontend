import React from "react";
import {Link} from "react-router-dom";

function ProfileLink() {
  return (
    <Link className="profile-link" to="/profile">Аккаунт</Link>
  );
}

export default ProfileLink;
