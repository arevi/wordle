import { BackspaceIcon } from "@heroicons/react/24/outline";
import { KeyType, LetterState } from "../../interfaces/LetterState";
import Key from "./Key/Key";
import { keyMap } from "../../constants/letters";

type Props = {
  addLetter: (letter: string) => void;
  removeLetter: () => void;
  submitGuess: () => void;
  letterState: LetterState;
};

export default function Keyboard({
  addLetter,
  removeLetter,
  submitGuess,
  letterState,
}: Props) {
  const getKeyLabel = (key: { key: string; type: KeyType }) => {
    switch (key.type) {
      case KeyType.ENTER:
        return "ENTER";
      case KeyType.BACKSPACE:
        return <BackspaceIcon className="h-7 w-7" />;
      default:
        return key.key;
    }
  };

  const getKeyFunction = (key: { key: string; type: KeyType }) => {
    switch (key.type) {
      case KeyType.LETTER:
        return addLetter(key.key);
      case KeyType.ENTER:
        return submitGuess();
      case KeyType.BACKSPACE:
        return removeLetter();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2 w-[500px]">
      {keyMap.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-1">
          {row.map((key, keyIndex) => (
            <Key
              key={keyIndex}
              value={key.key}
              onClick={() => getKeyFunction(key)}
              status={letterState[key.key]}
            >
              {getKeyLabel(key)}
            </Key>
          ))}
        </div>
      ))}
    </div>
  );
}
