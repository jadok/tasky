import { FieldProps } from './interface';

const fields: Record<string, (_: string) => Partial<FieldProps>> = {
  title: (value) =>  ({ type: "text", value, placeholder: 'Title', required: true }),
  description: (value) => ({ type: "textarea", value, placeholder: 'Some description', required: true }),
  time: (value) => ({ type: "number",  value, placeholder: '30', required: false }),
  date: (value) => ({ type: "date",  value, placeholder: '', required: false }),
  dueDate: (value) => ({ type: "date",  value, placeholder: '', required: false }),
  labels: (value) => ({ type: "text", value, placeholder: 'a, few, tags', required: false }),
  confidentiality: (value) => ({ type: "text", value, placeholder: 'a, certain, confidentiality', required: false }),
}

export const taskForm = {
  title: fields.title,
  description: fields.description,
  time: fields.time,
  date: fields.date,
  dueDate: fields.dueDate,
  labels: fields.labels,
  confidentiality: fields.confidentiality,
};
