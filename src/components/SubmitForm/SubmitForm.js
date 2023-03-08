function SubmitForm(props) {
  const submitButtonClass = `submit__form-button ${props.isProfileMode ? 'submit__form-button_type_profile' : ''}`;

  function handleSubmit(e) {
    e.preventDefault();
    props.onSubmitForm();
  }

  return (
    <form className="submit__form" name="submit-form" onSubmit={handleSubmit}>
      {props.children}
      <button type="submit" className={submitButtonClass}>{props.buttonText}</button>
    </form>
  );
}

export default SubmitForm;