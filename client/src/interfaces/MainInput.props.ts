import { InputHTMLAttributes } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { AllInputsValidate } from "./MainForm.interface";

export interface MainInputProps extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
  inputName: Path<AllInputsValidate>;
  register?: UseFormRegister<AllInputsValidate>;
  error?: string;
  required:boolean
}
