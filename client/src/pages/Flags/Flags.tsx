import axios from "axios";
import { useEffect, useState } from "react";

interface CountriesType {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
}

export default function Flags() {
  const [countries, setCountries] = useState([] as CountriesType[]);
  const [isLoading, setIsLoading] = useState(true);
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0 as number); // Suivi de la question actuelle
  const [nbsRandom, setNbsRandom] = useState([] as number[]);
  const [goodAnswer, setGoodAnswer] = useState(0 as number);
  // const [goodAnswer, setGoodAnswer] = useState<number>(0); // Index de la bonne réponse

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  // Fonction pour générer des indices de pays aléatoires
  const generateAnswer = () => {
    return Array.from({ length: 3 }, () =>
      Math.floor(Math.random() * countries.length),
    );
  };

  // Fonction pour générer une nouvelle question avec de nouvelles réponses aléatoires
  const handleNextQuestion = () => {
    const randomAnswers = generateAnswer();
    const correctAnswer =
      randomAnswers[Math.floor(Math.random() * randomAnswers.length)];

    setNbsRandom(randomAnswers); // Met à jour les réponses possibles
    setGoodAnswer(correctAnswer); // Met à jour la bonne réponse
    //   setCurrentQuestionIndex(
    //     (prevIndex: number) => (prevIndex + 1) % countries.length,
    //   ); // Passe à la question suivante (en boucle)
  };

  if (isLoading) {
    return <h3>Chargement...</h3>;
  }

  // Si les pays sont chargés, générer la première question
  if (countries.length && nbsRandom.length === 0) {
    handleNextQuestion(); // Générer la première question dès le chargement
  }

  return (
    <>
      <h2>Thème</h2>
      <h3>Quel est le drapeau de {countries[goodAnswer].name.common} ?</h3>
      <p>Bonne réponse : </p>
      <img
        src={countries[goodAnswer].flags.png}
        alt={`Drapeau de ${countries[goodAnswer].name.common}`}
      />
      <p>Réponses possibles : </p>
      <div className="flags-container">
        {nbsRandom.map((index) => (
          <img
            className="flags"
            key={index}
            src={countries[index].flags.png}
            alt={`Drapeau ${countries[index].name.common}`}
          />
        ))}
      </div>
      <button type="button" onClick={handleNextQuestion}>
        Question suivante
      </button>
    </>
  );
}
