import React from 'react';
import Field from './field';

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
          key={formStructure[fieldName].name}
          type={formStructure[fieldName].type}
          name={fieldName}
          value={formStructure[fieldName].value}
          handleChange={handleChange}
          placeholder={formStructure[fieldName].placeholder}
          required={formStructure[fieldName].required}
        />
      ))}
      <button type="submit" value={buttonText} />
    </form>
  );
};

export default Form;
