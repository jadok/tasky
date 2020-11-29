import React, { useState } from 'react';

import { Form } from '../utils/form/form';
import { taskForm } from '../utils/form/constantes';

interface TaskEditProps {
  id?: number;
  title?: string;
  description?: string;
  time?: number;
  date?: string;
  dueDate?: string;
  formTitle?: string;
}

export const TaskEdit = ({
  id = 0,
  title,
  description,
  time = 0,
  date = '',
  dueDate = '',
  formTitle = ''
}: TaskEditProps): JSX.Element => {
  const formStructure = {
    title: taskForm.title(title),
    description: taskForm.description(description),
    time: taskForm.time(time.toString()),
    date: taskForm.date(date),
    dueDate: taskForm.dueDate(dueDate),
  };
  const [fomData, setFormData] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <Form
      onSubmit={onSubmit}
      formData={fomData}
      formTitle={formTitle}
      setFormData={setFormData}
      formStructure={formStructure}
      buttonText={"Add"}
    />
  )
};
