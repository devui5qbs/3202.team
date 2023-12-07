import { FormHTMLAttributes } from "react";
import { MainInputProps } from "./MainInput.props";

export interface MainFormProps extends FormHTMLAttributes<HTMLFormElement> {
  inputs: MainInputProps[];
  submit?: boolean;
  getUser: (email: string, number: string) => void;
}

export interface AllInputsValidate {
  email: string;
  number: string;
}
