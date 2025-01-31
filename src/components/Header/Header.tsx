import { useEffect } from "react";
import { useReward } from "react-rewards";

type Props = {
  result: boolean;
  resetGame: () => void;
  word: string;
};

export default function Header({ result, resetGame, word }: Props) {
  const { reward } = useReward("resultText", "confetti");

  useEffect(() => {
    if (result) {
      reward();
    }
  }, [result, reward]);

  return (
    <div className="flex flex-col items-center gap-4">
      <h1
        className="text-2xl font-bold text-white flex gap-2 text-center"
        id="resultText"
      >
        {result ? "You Win!" : "You Lost!"}
      </h1>
      {!result ? (
        <h6 className="text-white">
          The word was <span className="underline">{word}</span>
        </h6>
      ) : null}

      <button
        className="text-neutral-500 rounded border border-neutral-500 hover:bg-neutral-500 hover:cursor-pointer hover:text-white py-1 px-2 transition-all"
        onClick={resetGame}
      >
        Play again
      </button>
    </div>
  );
}
