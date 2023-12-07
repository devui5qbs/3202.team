import { MainButtonProps } from "../../../interfaces/MainButton.interface";

const MainButton = ({ children, ...props}: MainButtonProps) => {
  return (
    <button
      {...props}
      className="bg-main-button w-full h-[40px] flex justify-center items-center outline-none rounded-[6px]"
    >
      <p className="text-white text-[16px] font-medium">{children}</p>
    </button>
  );
};

export default MainButton;
