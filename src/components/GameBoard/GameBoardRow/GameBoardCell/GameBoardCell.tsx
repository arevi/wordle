import classNames from "classnames";
import { motion } from "framer-motion";

type Props = {
  value: string;
  reveal: boolean;
  wordLetters: string[];
  letterIndex: number;
};

export default function GameBoardCell({
  value,
  reveal,
  wordLetters,
  letterIndex,
}: Props) {
  const getTileColor = () => {
    if (reveal) {
      if (wordLetters[letterIndex] === value.toUpperCase()) {
        return "#00c951";
      } else if (wordLetters.includes(value.toUpperCase())) {
        return "#f0b100";
      } else {
        return "#737373";
      }
    }
    return "";
  };

  return (
    <motion.div
      className={classNames(
        "h-14 w-14 border border-neutral-600 text-white font-semibold flex justify-center items-center uppercase transition-all duration-100"
      )}
      initial={{ rotateX: 0 }}
      animate={{
        rotateX: reveal ? 360 : 0,
        backgroundColor: reveal ? getTileColor() : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.75, delay: letterIndex * 0.75 }}
    >
      {value}
    </motion.div>
  );
}
