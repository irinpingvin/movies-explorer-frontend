import {useLocation} from "react-router-dom";

function SubmitForm(props) {
  const location = useLocation();
  let submitButtonClass = 'submit__form-button';

  if (location.pathname === '/profile') {
    submitButtonClass = 'submit__form-button submit__form-button_type_profile';
  } else if (location.pathname === '/signup') {
    submitButtonClass = 'submit__form-button submit__form-button_type_register';
  } else if (location.pathname === '/signin') {
    submitButtonClass = 'submit__form-button submit__form-button_type_login'
  }

  return (
    <form className="submit__form" name="submit-form" onSubmit={props.onSubmitForm}>
      {props.children}
      <button type="submit" className={submitButtonClass}>{props.buttonText}</button>
    </form>
  );
}

export default SubmitForm;