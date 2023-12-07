import { MainContainerProps } from "../../interfaces/MainContainer.interface";

const MainContainer = ({ children }: MainContainerProps) => {
  return (
    <div className=" w-screen h-screen flex flex-col gap-[10px] justify-center items-center bg-main-bg">
      {children}
    </div>
  );
};

export default MainContainer;
