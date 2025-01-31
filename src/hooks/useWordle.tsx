import { useMemo, useState } from "react";
import { LetterState, LetterStatus } from "../interfaces/LetterState";
import dictionary from "../constants/dictionary.json";

export default function useWordle() {
  const [word, setWord] = useState(
    () => dictionary[Math.floor(Math.random() * dictionary.length)]
  );
  const wordLetters = useMemo(() => word.split(""), [word]);

  const initialGuesses = Array(6).fill(Array(5).fill(""));
  const [guesses, setGuesses] = useState(initialGuesses);
  const [input, setInput] = useState<string[]>([]);
  const [letterState, setLetterState] = useState<LetterState>({});
  const [gameResult, setGameResult] = useState<boolean | null>(null);

  const submitGuess = () => {
    if (input.length !== 5) return;

    const currentGuessIndex = guesses.findIndex((guess) => guess[0] === "");
    if (currentGuessIndex === -1) return;

    const newGuesses = guesses.map((guess, index) =>
      index === currentGuessIndex ? input : guess
    );
    setGuesses(newGuesses);

    const newLetterState = { ...letterState };
    input.forEach((letter, index) => {
      if (wordLetters.includes(letter)) {
        newLetterState[letter] =
          letter === wordLetters[index]
            ? LetterStatus.CORRECT
            : LetterStatus.MISPLACED;
      } else {
        newLetterState[letter] = LetterStatus.INCORRECT;
      }
    });

    setLetterState(newLetterState);
    setInput([]);

    if (input.join("") === word) {
      setGameResult(true);
    } else if (currentGuessIndex === 5) {
      setGameResult(false);
    }
  };

  const resetGame = () => {
    setWord(dictionary[Math.floor(Math.random() * dictionary.length)]);
    setGuesses(initialGuesses);
    setInput([]);
    setLetterState({});
    setGameResult(null);
  };

  return {
    wordLetters,
    guesses,
    input,
    letterState,
    gameResult,
    submitGuess,
    resetGame,
    setInput,
    word,
  };
}
