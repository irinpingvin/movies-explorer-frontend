import {useLocation} from "react-router-dom";

function SubmitForm(props) {
  const location = useLocation();
  let submitButtonClass = 'submit-form__button';
  submitButtonClass += location.pathname === '/profile' ? ' submit-form__button_type_profile' : '';
  submitButtonClass += props.isValid ? ' submit-form__button_active' : ' submit-form__button_inactive';

  return (
    <form className="submit-form" name="submit-form" onSubmit={props.onSubmitForm} noValidate>
      <div className="submit-form__field-area">
        {props.children}
      </div>
      <div className="submit-form__result-area">
        <p className={`${props.errorMessage ? 'submit-form__error submit-form__error_active' : 'submit-form__error'}`}>{props.errorMessage}</p>
        <button type="submit" className={submitButtonClass}>{props.buttonText}</button>
      </div>
    </form>
  );
}

export default SubmitForm;