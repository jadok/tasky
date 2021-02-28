import React from 'react';
import { FieldProps } from './interface';

const Field = ({
  libelle,
  name,
  type,
  placeholder,
  required,
  value,
  handleChange,
}: FieldProps) => (
  <div>
    <label htmlFor={name}>{libelle ? libelle : name}</label>
    {type !== 'textarea' ? <input type={type} required={required} value={value} placeholder={placeholder} name={name} id={name} onChange={handleChange} />
    : <textarea required={required} value={value} placeholder={placeholder} name={name} id={name} onChange={handleChange} />}

  </div>
)

export default Field;
