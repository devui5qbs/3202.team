import { AnimatePresence, motion } from "framer-motion";
import { MainCardProps } from "../../../interfaces/MainCard.interface";

const MainCard = ({ children, rules, active }: MainCardProps) => {
  const { animate, exit, initial } = rules;

  return (
    <>
      <AnimatePresence initial={active}>
        {active && (
          <motion.div
            animate={animate}
            initial={initial}
            exit={exit}
            className="w-[500px] flex flex-col gap-[10px] bg-white rounded-[12px] px-[24px] py-[40px] transition-all"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MainCard;
