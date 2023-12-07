import { AnimatePresence, motion } from "framer-motion";
import { MainInputProps } from "../../../interfaces/MainInput.props";

const MainInput = ({
  text,
  register,
  inputName,
  error,
  required,
  ...props
}: MainInputProps) => {
  return (
    <label className="w-full flex flex-col gap-[5px]">
      {text && (
        <p className="text-[16px] font-medium text-main-textMain">{text}</p>
      )}
      <input
        {...register?.(inputName, {
          required: { value: required, message: "Is requierd" },
        })}
        className="w-full z-10 h-[40px] bg-main-input rounded-[6px] px-[10px] text-main-textMain placeholder:text-main-textInput 
        outline-none border border-transparent focus:border-main-button transition-all"
        {...props}
      />
      <AnimatePresence initial={!!error}>
        {!!error && (
          <motion.p
            exit={{
              y: "-120%",
            }}
            initial={{
              y: "-50%",
              opacity: "0",
            }}
            animate={{
              y: "0%",
              opacity: "1",
            }}
            className="text-[16px] font-medium text-red-500"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </label>
  );
};

export default MainInput;
