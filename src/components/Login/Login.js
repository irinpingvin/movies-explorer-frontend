import React from "react";
import { Link } from "react-router-dom";
import SubmitForm from "../SubmitForm/SubmitForm";
import InputError from "../InputError/InputError";

function Login(props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    setEmail('')
    setPassword('');
  }, []);

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin({
      email,
      password,
    });
  }

  return (
    <div className="login">
      <h2 className="login__title">Рады видеть!</h2>
      <SubmitForm buttonText="Войти" onSubmitForm={handleSubmit}>
        <div className="login__input-area">
          <p className="login__input-title">E-mail</p>
          <input type="text" name="login-name" required className="login__input-value"
                 id="login-email" minLength="2" maxLength="30" value={email} onChange={handleEmailChange}/>
        </div>
        <InputError/>
        <div className="login__input-area">
          <p className="login__input-title">Пароль</p>
          <input type="password" name="login-password" required className="login__input-value"
                 id="login-password" minLength="2" maxLength="30" value={password} onChange={handlePasswordChange}/>
        </div>
        <InputError/>
      </SubmitForm>
      <p className="login__auth-caption">Ещё не зарегистрированы?&nbsp;
        <Link className="login__auth-link" to="/signup">Регистрация</Link>
      </p>
    </div>
  );
}

export default Login;