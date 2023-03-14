import React from "react";
import { Link } from "react-router-dom";

function AuthLinks() {
  return(
    <div className="auth-links">
      <Link className="auth-links__link auth-links__link_type_signup" to="/signup">Регистрация</Link>
      <Link className="auth-links__link auth-links__link_type_signin" to="/signin">Войти</Link>
    </div>
  );
}

export default AuthLinks;