import React from "react";
import { Link } from "react-router-dom";
import SubmitForm from "../SubmitForm/SubmitForm";
import InputError from "../InputError/InputError";

function Register(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  React.useEffect(() => {
    setName('');
    setEmail('')
    setPassword('');
  }, []);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister({
      name,
      email,
      password,
    });
  }

  return (
    <main className="register">
      <h2 className="register__title">Добро пожаловать!</h2>
      <SubmitForm buttonText="Зарегистрироваться" onSubmitForm={handleSubmit}>
        <div className="register__input-area">
          <p className="register__input-title">Имя</p>
          <input type="text" name="register-name" required className="register__input-value"
                 id="register-name" minLength="2" maxLength="30" value={name} onChange={handleNameChange}/>
        </div>
        <InputError/>
        <div className="register__input-area">
          <p className="register__input-title">E-mail</p>
          <input type="text" name="register-name" required className="register__input-value"
                 id="register-email" minLength="2" maxLength="30" value={email} onChange={handleEmailChange}/>
        </div>
        <InputError/>
        <div className="register__input-area">
          <p className="register__input-title">Пароль</p>
          <input type="password" name="register-password" required className="register__input-value"
                 id="register-password" minLength="2" maxLength="30" value={password} onChange={handlePasswordChange}/>
        </div>
        <InputError/>
      </SubmitForm>
      <p className="register__auth-caption">Уже зарегистрированы?&nbsp;
        <Link className="register__auth-link" to="/signin">Войти</Link>
      </p>
    </main>
  );
}

export default Register;