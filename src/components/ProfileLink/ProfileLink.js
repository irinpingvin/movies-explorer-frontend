import React from "react";
import { Link } from "react-router-dom";

function ProfileLink() {
  return (
    <div className="profile-link">
      <Link className="profile-link__text" to="/profile">Аккаунт</Link>
      <Link className="profile-link__icon" to="/profile"></Link>
    </div>
  );
}

export default ProfileLink;
