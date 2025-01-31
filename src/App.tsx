import GameBoard from "./components/GameBoard/GameBoard";
import Keyboard from "./components/Keyboard/Keyboard";
import useKeyDown from "./hooks/useKeyDown";
import { validKeys } from "./constants/letters";
import Header from "./components/Header/Header";
import useWordle from "./hooks/useWordle";

export default function App() {
  const {
    gameResult,
    guesses,
    input,
    setInput,
    letterState,
    resetGame,
    submitGuess,
    wordLetters,
    word,
  } = useWordle();

  /**
   * Custom hook for keydown events
   */
  useKeyDown((key: string) => {
    if (key === "enter") {
      submitGuess();
    } else if (key === "backspace") {
      removeLetter();
    } else {
      addLetter(key.toUpperCase());
    }
  }, validKeys);

  /**
   * Add letter to input
   * @param letter A letter to add to the input
   */
  const addLetter = (letter: string) => {
    if (input.length < 5 && gameResult === null) {
      setInput((currentInput) => [...currentInput, letter]);
    }
  };

  /**
   * Remove last letter from input
   */
  const removeLetter = () => {
    if (input.length > 0) {
      setInput((currentInput) => currentInput.slice(0, -1));
    }
  };

  return (
    <main className="h-screen w-screen flex flex-col gap-12 justify-center items-center">
      <div className="flex flex-col gap-8 items-center">
        {gameResult !== null && (
          <Header word={word} result={gameResult} resetGame={resetGame} />
        )}
        <GameBoard guesses={guesses} input={input} wordLetters={wordLetters} />
      </div>
      <Keyboard
        submitGuess={submitGuess}
        addLetter={addLetter}
        removeLetter={removeLetter}
        letterState={letterState}
      />
    </main>
  );
}
