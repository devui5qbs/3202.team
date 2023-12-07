import { SubmitHandler, useForm } from "react-hook-form";
import {
  AllInputsValidate,
  MainFormProps,
} from "../../../interfaces/MainForm.interface";
import MainInput from "../inputs/MainInput";
import MainButton from "../buttons/MainButton";
import { useEffect } from "react";

const MainForm = ({ inputs, submit, getUser }: MainFormProps) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<AllInputsValidate>({ mode: "all" });
  const onSubmit: SubmitHandler<AllInputsValidate> = (data) => {
    const { email, number } = data;
    const numericString = number.replace(/\D/g, "");
    return getUser(email, numericString);
  };
  useEffect(() => {
    let formattedValue = watch("number").replace(/\D/g, "");
    formattedValue = formattedValue
      .replace(/(\d{2})(?=\d)/g, "$1-")
      .slice(0, 8);
    setValue("number", formattedValue);
  }, [watch("number")]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[15px] w-full"
    >
      {inputs.map((item, index) => (
        <MainInput
          register={register}
          inputName={item.inputName}
          key={index.toString()}
          placeholder={item.placeholder}
          name={item.name}
          text={item.text}
          type={item.type}
          error={errors[item.inputName]?.message}
          required={item.required}
        />
      ))}
      {submit && <MainButton>Submit</MainButton>}
    </form>
  );
};

export default MainForm;
