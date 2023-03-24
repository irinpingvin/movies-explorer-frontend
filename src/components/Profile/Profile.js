import React from "react";
import SubmitForm from "../SubmitForm/SubmitForm";
import InputError from "../InputError/InputError";
import {Link} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/currentUser/CurrentUserContext";
import {useFormWithValidation, EMAIL_PATTERN} from "../FormWithValidation/FormWithValidation";

function Profile(props) {
  const userInfo = React.useContext(CurrentUserContext);
  const {values, setValues, handleChange, isValid, setIsValid, errors} = useFormWithValidation({profileName: userInfo.name, profileEmail: userInfo.email});

  React.useEffect(() => {
    setValues({...values, profileName: userInfo.name, profileEmail: userInfo.email});
    setIsValid(false);
  }, [userInfo]);

  function handleSubmit(e) {
    e.preventDefault();
    if (isValid) {
      props.onChangeUserInfo({name: values.profileName, email: values.profileEmail});
    }
  }

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, {userInfo.name}!</h2>
      <SubmitForm buttonText="Редактировать" onSubmitForm={handleSubmit} errorMessage={props.errorMessage} isValid={isValid}>
        <div className="profile__input-area">
          <p className="profile__input-title">Имя</p>
          <input type="text" name="profileName" required className="profile__input-value"
                 id="profile-name" minLength="2" maxLength="30" value={values.profileName} onChange={handleChange}/>
        </div>
        <InputError errorMessage={errors.profileName}/>
        <div className="profile__border"></div>
        <div className="profile__input-area">
          <p className="profile__input-title">E-mail</p>
          <input type="email" name="profileEmail" required className="profile__input-value"
                 id="profile-email" value={values.profileEmail} onChange={handleChange} pattern={EMAIL_PATTERN.source}/>
        </div>
        <InputError errorMessage={errors.profileEmail}/>
      </SubmitForm>
      <Link className="profile__signout-link" to="/" onClick={props.onSignoutClick}>Выйти из аккаунта</Link>
    </main>
  );
}

export default Profile;