import classNames from "classnames";
import { LetterStatus } from "../../../interfaces/LetterState";
import { ReactNode } from "react";

type Props = {
  value: string;
  status?: LetterStatus;
  onClick: () => void;
  children: ReactNode;
};

export default function Key({ onClick, status, children }: Props) {
  const getBackgroundColor = () => {
    switch (status) {
      case LetterStatus.CORRECT:
        return "bg-green-500";
      case LetterStatus.MISPLACED:
        return "bg-yellow-500";
      case LetterStatus.INCORRECT:
        return "bg-neutral-800";
      default:
        return "bg-neutral-500 hover:bg-neutral-600";
    }
  };

  return (
    <button
      onClick={onClick}
      className={classNames(
        "text-white rounded p-2 text-lg font-semibold min-w-8 hover:cursor-pointer",
        getBackgroundColor()
      )}
    >
      {children}
    </button>
  );
}
