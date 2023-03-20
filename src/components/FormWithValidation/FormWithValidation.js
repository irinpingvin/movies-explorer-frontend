import React from "react";

export function useFormWithValidation(initialValues) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState(initialValues);
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors(initialValues);
    setIsValid(false);
  };

  return { values, setValues, handleChange, errors, isValid, resetForm };
}