import React from "react";
import { Link } from "react-router-dom";
import SubmitForm from "../SubmitForm/SubmitForm";
import InputError from "../InputError/InputError";
import {useFormWithValidation, EMAIL_PATTERN} from "../FormWithValidation/FormWithValidation";

function Register(props) {
  const {values, setValues, handleChange, isValid, errors} = useFormWithValidation({registerName: '', registerEmail: '', registerPassword: ''});

  React.useEffect(() => {
    setValues({...values, registerName: '', registerEmail: '', registerPassword: ''});
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.onRegister({
        name: values.registerName,
        email: values.registerEmail,
        password: values.registerPassword,
      });
    }
  }

  return (
    <main className="register">
      <h2 className="register__title">Добро пожаловать!</h2>
      <SubmitForm buttonText="Зарегистрироваться" onSubmitForm={handleSubmit} errorMessage={props.errorMessage} isValid={isValid}>
        <div className="register__input-area">
          <p className="register__input-title">Имя</p>
          <input type="text" name="registerName" required className="register__input-value"
                 id="register-name" minLength="2" maxLength="30" value={values.registerName} onChange={handleChange}/>
        </div>
        <InputError errorMessage={errors.registerName}/>
        <div className="register__input-area">
          <p className="register__input-title">E-mail</p>
          <input type="email" name="registerEmail" required className="register__input-value"
                 id="register-email" minLength="2" maxLength="30" value={values.registerEmail} onChange={handleChange} pattern={EMAIL_PATTERN.source}/>
        </div>
        <InputError errorMessage={errors.registerEmail}/>
        <div className="register__input-area">
          <p className="register__input-title">Пароль</p>
          <input type="password" name="registerPassword" required className="register__input-value"
                 id="register-password" minLength="2" maxLength="30" value={values.registerPassword} onChange={handleChange}/>
        </div>
        <InputError errorMessage={errors.registerPassword}/>
      </SubmitForm>
      <p className="register__auth-caption">Уже зарегистрированы?&nbsp;
        <Link className="register__auth-link" to="/signin">Войти</Link>
      </p>
    </main>
  );
}

export default Register;