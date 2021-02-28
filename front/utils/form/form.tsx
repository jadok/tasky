import React from 'react';

import Field from './field';
import { FieldProps } from './interface';

export const initFormFields = (formConfigs: Record<string, Partial<FieldProps>>) =>
  Object.entries(formConfigs)
    .reduce(
      (acc, [fieldName, fieldProps]) => {
        acc[fieldName] = fieldProps.value ?? '';
        return acc;
      },
      {}
    );

export const Form = ({
  formStructure,
  formData,
  setFormData,
  formTitle,
  buttonText,
  onSubmit
}) => {
  const handleChange = event => {
    const formDataCopy = { ...formData };
    formDataCopy[event.target.name] = event.target.value;
    setFormData(formDataCopy);
  };
  return (
    <form onSubmit={onSubmit}>
      <h2>{formTitle}</h2>
      {Object.keys(formStructure).map((fieldName) => (
        <Field
          key={fieldName}
          type={formStructure[fieldName].type}
          name={fieldName}
          value={formData[fieldName].value}
          handleChange={handleChange}
          placeholder={formStructure[fieldName].placeholder}
          required={formStructure[fieldName].required}
        />
      ))}
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
