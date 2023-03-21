import React from "react";
import { Link } from "react-router-dom";
import SubmitForm from "../SubmitForm/SubmitForm";
import InputError from "../InputError/InputError";
import {useFormWithValidation, emailPattern} from "../FormWithValidation/FormWithValidation";

function Login(props) {
  const {values, setValues, handleChange, isValid, errors} = useFormWithValidation({loginEmail: '', loginPassword: ''});

  React.useEffect(() => {
    setValues({...values, loginEmail: '', loginPassword: ''});
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.onLogin({
        email: values.loginEmail,
        password: values.loginPassword,
      });
    }
  }

  return (
    <main className="login">
      <h2 className="login__title">Рады видеть!</h2>
      <SubmitForm buttonText="Войти" onSubmitForm={handleSubmit} errorText={props.errorText} isValid={isValid}>
        <div className="login__input-area">
          <p className="login__input-title">E-mail</p>
          <input type="email" name="loginEmail" required className="login__input-value"
                 id="login-email" minLength="2" maxLength="30" value={values.loginEmail} onChange={handleChange} pattern={emailPattern.source}/>
        </div>
        <InputError errorMessage={errors.loginEmail}/>
        <div className="login__input-area">
          <p className="login__input-title">Пароль</p>
          <input type="password" name="loginPassword" required className="login__input-value"
                 id="login-password" minLength="2" maxLength="30" value={values.loginPassword} onChange={handleChange}/>
        </div>
        <InputError errorMessage={errors.loginPassword}/>
      </SubmitForm>
      <p className="login__auth-caption">Ещё не зарегистрированы?&nbsp;
        <Link className="login__auth-link" to="/signup">Регистрация</Link>
      </p>
    </main>
  );
}

export default Login;