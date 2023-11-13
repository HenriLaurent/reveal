import { HeartIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Difficulty } from "./game-difficulty";
import Keyboard from "../components/Keyboard";
import LooseModal from "../components/LooseModal";
import WinModal from "../components/WinModal";
import Word from "../components/Word";

type Location = {
  state: {
    difficulty: Difficulty;
  };
};

type Word = {
  word: string;
  difficulty: Difficulty;
};

const wordsArray: Word[] = [
  // Facile
  { word: "banane", difficulty: "EASY" },
  { word: "chaise", difficulty: "EASY" },
  { word: "fraise", difficulty: "EASY" },
  { word: "soleil", difficulty: "EASY" },
  { word: "lumière", difficulty: "EASY" },
  { word: "fromage", difficulty: "EASY" },
  { word: "papier", difficulty: "EASY" },
  { word: "cahier", difficulty: "EASY" },
  { word: "fenêtre", difficulty: "EASY" },
  { word: "avion", difficulty: "EASY" },
  { word: "plage", difficulty: "EASY" },
  { word: "voiture", difficulty: "EASY" },
  { word: "bureau", difficulty: "EASY" },
  { word: "école", difficulty: "EASY" },
  { word: "montagne", difficulty: "EASY" },
  { word: "girafe", difficulty: "EASY" },
  { word: "jardin", difficulty: "EASY" },
  { word: "piscine", difficulty: "EASY" },
  { word: "marcher", difficulty: "EASY" },
  { word: "sourire", difficulty: "EASY" },
  { word: "dessin", difficulty: "EASY" },
  { word: "gâteau", difficulty: "EASY" },
  { word: "famille", difficulty: "EASY" },
  { word: "vacances", difficulty: "EASY" },
  { word: "bouteille", difficulty: "EASY" },

  // Medium
  { word: "parapluie", difficulty: "MEDIUM" },
  { word: "ordinateur", difficulty: "MEDIUM" },
  { word: "université", difficulty: "MEDIUM" },
  { word: "électricité", difficulty: "MEDIUM" },
  { word: "restaurant", difficulty: "MEDIUM" },
  { word: "environnement", difficulty: "MEDIUM" },
  { word: "bouilloire", difficulty: "MEDIUM" },
  { word: "chocolat", difficulty: "MEDIUM" },
  { word: "amitié", difficulty: "MEDIUM" },
  { word: "véhicule", difficulty: "MEDIUM" },
  { word: "anniversaire", difficulty: "MEDIUM" },
  { word: "grenouille", difficulty: "MEDIUM" },
  { word: "éléphant", difficulty: "MEDIUM" },
  { word: "perroquet", difficulty: "MEDIUM" },
  { word: "chemise", difficulty: "MEDIUM" },
  { word: "douche", difficulty: "MEDIUM" },
  { word: "télévision", difficulty: "MEDIUM" },
  { word: "aspirateur", difficulty: "MEDIUM" },
  { word: "batterie", difficulty: "MEDIUM" },
  { word: "boulanger", difficulty: "MEDIUM" },
  { word: "clavier", difficulty: "MEDIUM" },
  { word: "pantalon", difficulty: "MEDIUM" },
  { word: "tomate", difficulty: "MEDIUM" },
  { word: "ananas", difficulty: "MEDIUM" },
  { word: "journal", difficulty: "MEDIUM" },

  // Hard
  { word: "aérodynamique", difficulty: "HARD" },
  { word: "psychologie", difficulty: "HARD" },
  { word: "développeur", difficulty: "HARD" },
  { word: "responsabilité", difficulty: "HARD" },
  { word: "bibliothèque", difficulty: "HARD" },
  { word: "champignon", difficulty: "HARD" },
  { word: "rhinocéros", difficulty: "HARD" },
  { word: "zoologie", difficulty: "HARD" },
  { word: "xylophone", difficulty: "HARD" },
  { word: "parallélisme", difficulty: "HARD" },
  { word: "théorème", difficulty: "HARD" },
  { word: "physique", difficulty: "HARD" },
  { word: "algorithme", difficulty: "HARD" },
  { word: "pétrolier", difficulty: "HARD" },
  { word: "architecte", difficulty: "HARD" },
  { word: "hologramme", difficulty: "HARD" },
  { word: "chiropracteur", difficulty: "HARD" },
  { word: "informatique", difficulty: "HARD" },
  { word: "épidémiologie", difficulty: "HARD" },
  { word: "chronomètre", difficulty: "HARD" },
  { word: "hexagone", difficulty: "HARD" },
  { word: "bénévolat", difficulty: "HARD" },
  { word: "manuscrit", difficulty: "HARD" },
  { word: "photosynthèse", difficulty: "HARD" },
  { word: "biotechnologie", difficulty: "HARD" },

  // Extreme
  { word: "anticonstitutionnellement", difficulty: "EXTREME" },
  { word: "intergouvernementalisations", difficulty: "EXTREME" },
  { word: "hippopotomonstrosesquippedaliophobie", difficulty: "EXTREME" },
  { word: "dichlorodiphényltrichloroéthane", difficulty: "EXTREME" },
  { word: "indivisibilité", difficulty: "EXTREME" },
  { word: "cryptographie", difficulty: "EXTREME" },
  { word: "dactylographie", difficulty: "EXTREME" },
  { word: "électroencéphalographie", difficulty: "EXTREME" },
  { word: "ophtalmologiste", difficulty: "EXTREME" },
  { word: "rhododendron", difficulty: "EXTREME" },
  { word: "staphylocoque", difficulty: "EXTREME" },
  { word: "stéréophonique", difficulty: "EXTREME" },
  { word: "sulfaméthoxazole", difficulty: "EXTREME" },
  { word: "symptomatologie", difficulty: "EXTREME" },
  { word: "synchronisation", difficulty: "EXTREME" },
  { word: "trouble-fête", difficulty: "EXTREME" },
  { word: "virologie", difficulty: "EXTREME" },
  { word: "zootechnie", difficulty: "EXTREME" },
  { word: "électrophorèse", difficulty: "EXTREME" },
  { word: "électrostimulateur", difficulty: "EXTREME" },
  { word: "épiscopologe", difficulty: "EXTREME" },
  { word: "épitaphier", difficulty: "EXTREME" },
  { word: "équarrisseur", difficulty: "EXTREME" },
  { word: "étymologie", difficulty: "EXTREME" },
  { word: "évapotranspiration", difficulty: "EXTREME" },
];

function removeAccents(str: string): string {
  const accents = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÖØòóôõöøÈÉÊËèéêëÇçÌÍÎÏìíîïÙÚÛÜùúûüÿÑñ";
  const without = "AAAAAAaaaaaaOOOOOOooooooEEEEeeeeCcIIIIiiiiUUUUuuuuyNn";
  const chars = str.split("");

  chars.forEach((char, index) => {
    const accentIndex = accents.indexOf(char);
    if (accentIndex !== -1) {
      chars[index] = without.charAt(accentIndex);
    }
  });

  return chars.join("");
}

function getWord(difficulty: Difficulty): Word {
  const words = wordsArray.filter((word) => word.difficulty === difficulty);
  return words[Math.floor(Math.random() * words.length)];
}

export default function Game() {
  const navigate = useNavigate();
  const { state } = useLocation() as Location;
  const [disabledLetters, setDisabledLetters] = useState<string[]>([]);
  const [foundLetters, setFoundLetters] = useState<string[]>([]);
  const [word, setWord] = useState<string>(
    removeAccents(getWord(state.difficulty).word.toUpperCase())
  );
  const lifes = 10 - disabledLetters.length;
  const hasLost = lifes === 0;
  const hasWon =
    word.length > 0 &&
    word
      .split("")
      .every((letter) =>
        foundLetters.find((foundLetter) => foundLetter === letter)
      );

  const handlePickLetter = (letter: string) => {
    if (word.includes(letter)) {
      setFoundLetters([...foundLetters, letter]);
      return;
    }
    setDisabledLetters([...disabledLetters, letter]);
  };

  function resetGame() {
    setDisabledLetters([]);
    setFoundLetters([]);
    setTimeout(() => {
      setWord(removeAccents(getWord(state.difficulty).word.toUpperCase()));
    }, 200);
  }

  return (
    <>
      <div className="h-screen flex flex-col justify-around items-center bg-gradient-to-tl from-blue-400 via-indigo-300 to-violet-200">
        <div className="flex gap-4">
          {[...Array(lifes).keys()].map(() => (
            <HeartIcon className="w-12 h-12 text-red-500" />
          ))}
        </div>
        <Word word={word} foundLetters={foundLetters} />
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
          <Keyboard
            handlePickLetter={handlePickLetter}
            foundLetters={foundLetters}
            disabledLetters={disabledLetters}
          />
        </div>
      </div>
      <LooseModal
        isOpen={hasLost}
        word={word}
        handleBackToHome={() => navigate("/")}
        handleRestart={() => resetGame()}
      />
      <WinModal
        isOpen={hasWon}
        word={word}
        handleBackToHome={() => navigate("/")}
        handleRestart={() => resetGame()}
      />
    </>
  );
}
