import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

type KeyboardProps = {
  handlePickLetter: (letter: string) => void;
  foundLetters: string[];
  disabledLetters: string[];
};
export default function Keyboard({
  handlePickLetter,
  foundLetters,
  disabledLetters,
}: KeyboardProps) {
  const alphabet = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );
  return (
    <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
      {alphabet.map((letter, index) => (
        <motion.button
          key={letter}
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.025 * index ** 1.25, duration: 0.25 }}
          className={twMerge(
            "cursor-pointer w-16 h-16 flex justify-center text-3xl items-center bg-gray-50 bg-opacity-25 text-gray-900 disabled:cursor-not-allowed rounded-lg hover:bg-opacity-40",
            foundLetters.find((foundLetter) => foundLetter === letter)
              ? "bg-green-500 text-white"
              : "",
            disabledLetters.find((disabledLetter) => disabledLetter === letter)
              ? "bg-red-100 text-red-500 text-opacity-50 hover:bg-opacity-25"
              : ""
          )}
          disabled={
            !!disabledLetters.find(
              (disabledLetter) => disabledLetter === letter
            )
          }
          onClick={() => handlePickLetter(letter)}
        >
          {letter}
        </motion.button>
      ))}
    </div>
  );
}
