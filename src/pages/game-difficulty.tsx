import BronzeIcon from "../assets/bronze.png";
import SilverIcon from "../assets/silver.png";
import GoldIcon from "../assets/gold.png";
import DiamondIcon from "../assets/diamond.png";
import { motion, useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";

export type Difficulty = "EASY" | "MEDIUM" | "HARD" | "EXTREME";

export default function GameDifficulty() {
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();
  const handleClick = (difficulty: Difficulty) => {
    animate(scope.current, { opacity: 0, y: -300 }, { duration: 0.2 });
    setTimeout(() => {
      navigate("/game", { state: { difficulty } });
    }, 250);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-tl from-blue-400 via-indigo-300 to-violet-200">
      <ul className="flex gap-8" ref={scope}>
        <motion.li
          id="bronze"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          onClick={() => handleClick("EASY")}
          className="w-48 cursor-pointer flex flex-col items-center gap-8 bg-gray-50 bg-opacity-25 p-12 rounded-2xl"
        >
          <img className="w-16 h-16" src={BronzeIcon} />
          <h2 className="text-xl font-montserrat font-black tracking-wider text-green-600">
            FACILE
          </h2>
        </motion.li>
        <motion.li
          id="silver"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          onClick={() => handleClick("MEDIUM")}
          className="w-48 cursor-pointer flex flex-col items-center gap-8 bg-gray-50 bg-opacity-25 p-12 rounded-2xl"
        >
          <img className="w-16 h-16" src={SilverIcon} />
          <h2 className="text-xl font-montserrat font-black tracking-wider text-yellow-600">
            MOYEN
          </h2>
        </motion.li>
        <motion.li
          id="gold"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          onClick={() => handleClick("HARD")}
          className="w-48 cursor-pointer flex flex-col items-center gap-8 bg-gray-50 bg-opacity-25 p-12 rounded-2xl"
        >
          <img className="w-16 h-16" src={GoldIcon} />
          <h2 className="text-xl font-montserrat font-black tracking-wider text-red-600">
            DIFFICILE
          </h2>
        </motion.li>
        <motion.li
          id="diamond"
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
          onClick={() => handleClick("EXTREME")}
          className="w-48 cursor-pointer flex flex-col items-center gap-8 bg-gray-50 bg-opacity-25 p-12 rounded-2xl"
        >
          <img className="w-16 h-16" src={DiamondIcon} />
          <h2 className="text-xl font-montserrat font-black tracking-wider text-purple-600">
            EXTREME
          </h2>
        </motion.li>
      </ul>
    </div>
  );
}
