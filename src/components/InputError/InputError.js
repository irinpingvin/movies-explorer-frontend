function InputError(props) {
  return (
    <p className={`${props.isSearchForm ? 'input-error input-error_type_search-form' : 'input-error'}`}>{props.errorMessage}</p>
  );
}

export default InputError;