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
  const [nbsRandom, setNbsRandom] = useState([] as number[]);
  const [goodAnswer, setGoodAnswer] = useState(0 as number);
  const [questionCount, setQuestionCount] = useState(0);
  const [userChoiceIndex, setUserChoiceIndex] = useState(0 as number);
  const [score, setScore] = useState(0);

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
    setQuestionCount((prevCount) => prevCount + 1);
  };

  const handleChoiseAnswer = (countryIndex: number) => {
    console.info("rep choisi : ", { countryIndex });
    setUserChoiceIndex(countryIndex);
    //si réponse selectionner -> bonne
    // alors -> score += 1 else score +=0
    if (
      countries[countryIndex].name.common === countries[goodAnswer].name.common
    ) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  if (isLoading) {
    return <h3>Chargement...</h3>;
  }

  // Si les pays sont chargés, générer la première question
  if (countries.length && nbsRandom.length === 0) {
    handleNextQuestion(); // Générer la première question dès le chargement
  }
  if (questionCount >= 11) {
    return <h2>Finito pipo - {score}/10</h2>;
  }
  return (
    <>
      <h2>Thème - question {questionCount}</h2>
      <h3>Quel est le drapeau de {countries[goodAnswer].name.common} ?</h3>
      <p>Bonne réponse : </p>
      <img
        src={countries[goodAnswer].flags.png}
        alt={`Drapeau de ${countries[goodAnswer].name.common}`}
      />
      <p>Réponses possibles : </p>
      <div className="flags-container">
        {nbsRandom.map((index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleChoiseAnswer(index)}
          >
            <img
              className="flags"
              key={index}
              src={countries[index].flags.png}
              alt={`Drapeau ${countries[index].name.common}`}
            />
          </button>
        ))}
      </div>
      <p> reponse choisit : {countries[userChoiceIndex].name.common} </p>
      <p>
        {" "}
        {countries[userChoiceIndex].name.common ===
        countries[goodAnswer].name.common
          ? "gg"
          : "pas gg"}
      </p>
      <button type="button" onClick={handleNextQuestion}>
        Question suivante
      </button>
      <div>
        <h2>Quiz Terminé !</h2>
        <p>Votre score final est de {score} / 10.</p>
      </div>
    </>
  );
}
