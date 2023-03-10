import React from "react";
import SubmitForm from "../SubmitForm/SubmitForm";
import InputError from "../InputError/InputError";
import { Link } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUser/CurrentUserContext";

function Profile(props) {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const userInfo = React.useContext(CurrentUserContext);

  React.useEffect(() => {
    setName(userInfo.name);
    setEmail(userInfo.email);
  }, [userInfo]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onChangeUserInfo({
      name,
      email,
    });
  }

  return (
    <main className="profile">
      <h2 className="profile__title">Привет, {name}!</h2>
      <SubmitForm buttonText="Редактировать" onSubmitForm={handleSubmit}>
        <div className="profile__input-area">
          <p className="profile__input-title">Имя</p>
          <input type="text" name="profile-name" required className="profile__input-value"
                 id="profile-name" minLength="2" maxLength="30" value={name} onChange={handleNameChange}/>
        </div>
        <InputError/>
        <div className="profile__border"></div>
        <div className="profile__input-area">
          <p className="profile__input-title">E-mail</p>
          <input type="email" name="profile-email" required className="profile__input-value"
                 id="profile-email" value={email} onChange={handleEmailChange}/>
        </div>
        <InputError/>
      </SubmitForm>
      <Link className="profile__signout-link" to="/" onClick={props.onSignoutClick}>Выйти из аккаунта</Link>
    </main>
  );
}

export default Profile;