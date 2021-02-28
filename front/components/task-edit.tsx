import React, { useState } from 'react';
import { gql } from 'graphql-request';
import formatISO from 'date-fns/formatISO';

import { Form, initFormFields } from '../utils/form/form';
import { taskForm } from '../utils/form/constantes';
import { graphQLClient } from '../lib/client-graphql';

const nowDate = () => formatISO(new Date())

export enum enumEditionMode {
  short = 'short',
  detail = 'detail',
}

interface TaskEditProps {
  id?: number;
  name?: string;
  description?: string;
  time?: number;
  date?: string;
  dueDate?: string;
  formTitle?: string;
  mode?: enumEditionMode,
}

export const TaskEdit = ({
  id = 0,
  name,
  description,
  time = 0,
  date = '',
  dueDate = '',
  formTitle = '',
  mode = enumEditionMode.short,
}: TaskEditProps): JSX.Element => {
  const formStructure = {
    name: taskForm.name(name),
    description: taskForm.description(description),
    time: taskForm.time(time.toString()),
    date: taskForm.date(date),
    dueDate: taskForm.dueDate(dueDate),
  };
  const [fomData, setFormData] = useState(initFormFields(formStructure));

  const onSubmit = (e) => {
    e.preventDefault();
    const query = gql`
      mutation  addTask($input: AddTaskInput!) {

        addTask(input: $input) {
          id,
          date,
          name,
          labels,
          confidentialities,
        }
        
      }
    `;
    const formData = new FormData(e.currentTarget);
    const values: Record<string, unknown> = {};
    for (const [name,value] of formData) {
      values[name] = value;
    };
    values.time = parseInt(values.time as string, 10);
    values.date = new Date(values.date as string || '').toISOString();
    graphQLClient.request(query, { 'input': values })
      .then((a) => console.log({ a, m: 'success' }))
      .catch((e) => console.error({ e, m: 'error' }));
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
