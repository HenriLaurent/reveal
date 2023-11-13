import { twMerge } from "tailwind-merge";

type WordProps = {
  word: string;
  foundLetters: string[];
};

export default function Word({ word, foundLetters }: WordProps) {
  const letters = word.split("").map((letter) => {
    if (foundLetters.find((foundLetter) => foundLetter === letter)) {
      return {
        letter,
        isFound: true,
      };
    }
    return {
      letter,
      isFound: false,
    };
  });
  return (
    <div className="flex gap-8">
      {letters.map((letter, idx) => (
        <div
          key={letter.letter + idx}
          className="border-b border-b-solid border-b-gray-900 p-4"
        >
          <p
            className={twMerge(
              "text-4xl font-bold",
              letter.isFound ? "opacity-1" : "opacity-0"
            )}
          >
            {letter.letter}
          </p>
        </div>
      ))}
    </div>
  );
}
