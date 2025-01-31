import { useMemo } from "react";
import GameBoardRow from "./GameBoardRow/GameBoardRow";

type Props = {
  wordLetters: string[];
  guesses: string[][];
  input: string[];
};

export default function GameBoard({ wordLetters, guesses, input }: Props) {
  const activeRow = useMemo(() => {
    let activeRow: number = 0;

    for (const guess of guesses) {
      if (guess[0] === "") {
        break;
      }

      activeRow++;
    }

    return activeRow;
  }, [guesses]);

  return (
    <div className="flex flex-col gap-2">
      {guesses.map((guess, guessIndex) => (
        <GameBoardRow
          key={guessIndex}
          active={guessIndex === activeRow}
          guessLetters={guess}
          input={input}
          wordLetters={wordLetters}
        />
      ))}
    </div>
  );
}
