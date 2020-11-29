import { ChangeEvent } from "react";

export interface FieldProps {
  type: string;
  value: string;
  placeholder: string;
  libelle?: string;
  required: boolean;
  name: string;
  handleChange: (_: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
