import { motion, useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  const [scope, animate] = useAnimate();
  const handleClick = () => {
    animate(scope.current, { opacity: 0, y: -300 }, { duration: 0.2 });
    setTimeout(() => {
      navigate("/difficulty");
    }, 250);
  };
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-tl from-blue-400 via-indigo-300 to-violet-200">
      <motion.div
        ref={scope}
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl flex flex-col gap-8 justify-center items-center bg-gray-50 bg-opacity-25 p-12 rounded-2xl"
      >
        <h1 className="text-indigo-900 text-4xl font-montserrat font-black">
          REVEAL
        </h1>
        <p className="leading-7 text-lg text-center font-montserrat">
          Bienvenue dans REVEAL, votre objectif est simple. Vous devez trouver
          le mot mystère. Pour cela, vous devez deviner des lettres. Si vous
          trouvez une lettre, elle sera affichée à sa place dans le mot. Si vous
          trouvez le mot, vous gagnez. Si vous n'arrivez pas à trouver le mot,
          vous perdez. Bonne chance !
        </p>
        <button
          type="button"
          onClick={handleClick}
          className="rounded-full bg-indigo-600 px-6 py-3 text-xl font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Nouvelle partie
        </button>
      </motion.div>
    </div>
  );
}
