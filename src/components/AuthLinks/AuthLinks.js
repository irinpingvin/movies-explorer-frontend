import React from "react";
import { Link } from "react-router-dom";

function AuthLinks() {
  return(
    <div className="auth-links">
      <Link className="auth-links__signup" to="/signup">Регистрация</Link>
      <Link className="auth-links__signin" to="/signin">Войти</Link>
    </div>
  );
}

export default AuthLinks;