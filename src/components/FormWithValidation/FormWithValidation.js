import React, {useCallback} from "react";

export function useFormWithValidation(initialValues) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = useCallback(
    (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });

    if (value !== initialValues[name]) {
      setIsValid(target.closest("form").checkValidity());
    } else {
      setIsValid(false);
    }
  }, [initialValues, values, errors]);

  return { values, setValues, handleChange, errors, isValid, setIsValid };
}

export const EMAIL_PATTERN = new RegExp(/\S+@(\w|\w-\w)+\.(ru|com)/);