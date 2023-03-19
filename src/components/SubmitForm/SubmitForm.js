import {useLocation} from "react-router-dom";

function SubmitForm(props) {
  const location = useLocation();
  let submitButtonClass = 'submit-form__button';

  if (location.pathname === '/profile') {
    submitButtonClass = 'submit-form__button submit-form__button_type_profile';
  }

  return (
    <form className="submit-form" name="submit-form" onSubmit={props.onSubmitForm}>
      <div className="submit-form__field-area">
        {props.children}
      </div>
      <div className="submit-form__result-area">
        <p className={`${props.errorText ? 'submit-form__error submit-form__error_active' : 'submit-form__error'}`}>{props.errorText}</p>
        <button type="submit" className={submitButtonClass}>{props.buttonText}</button>
      </div>
    </form>
  );
}

export default SubmitForm;