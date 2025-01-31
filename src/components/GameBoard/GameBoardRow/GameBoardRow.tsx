import GameBoardCell from "./GameBoardCell/GameBoardCell";

type Props = {
  guessLetters: string[];
  input: string[];
  active: boolean;
  wordLetters: string[];
};

export default function GameBoardRow({
  guessLetters,
  input,
  active,
  wordLetters,
}: Props) {
  return (
    <div className="flex gap-1">
      {guessLetters.map((guessLetter, guessLetterIndex) => (
        <GameBoardCell
          key={guessLetterIndex}
          letterIndex={guessLetterIndex}
          reveal={guessLetter !== ""}
          value={active ? input[guessLetterIndex] : guessLetter}
          wordLetters={wordLetters}
        />
      ))}
    </div>
  );
}
