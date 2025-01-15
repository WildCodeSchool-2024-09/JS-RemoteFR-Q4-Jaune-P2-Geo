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
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

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

  // Fonction pour générer des indices de pays aléatoires UNIQUE (condition if)
  const generateAnswer = () => {
    const arrayNbs = [] as number[];
    while (arrayNbs.length < 3) {
      const num = Math.floor(Math.random() * countries.length);
      if (!arrayNbs.includes(num)) {
        arrayNbs.push(num);
      }
    }
    return arrayNbs;
  };

  // Fonction pour générer une nouvelle question avec de nouvelles réponses aléatoires
  const handleNextQuestion = () => {
    const randomAnswers = generateAnswer();
    const correctAnswer =
      randomAnswers[Math.floor(Math.random() * randomAnswers.length)];

    setNbsRandom(randomAnswers); // Met à jour les réponses possibles
    setGoodAnswer(correctAnswer); // Met à jour la bonne réponse
    setQuestionCount((prevCount) => prevCount + 1);
    closeDialog();
    setIsAnswerSelected(false);
  };

  const handleChoiseAnswer = (countryIndex: number) => {
    if (isAnswerSelected) return;
    setIsAnswerSelected(true);

    setUserChoiceIndex(countryIndex);
    setDialogOpen(true);

    if (countryIndex === goodAnswer) {
      setIsValidate(true);
    } else {
      setIsValidate(false);
    }

    if (
      countries[countryIndex].name.common === countries[goodAnswer].name.common
    ) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  if (isLoading) {
    return <h3>Chargement...</h3>;
  }

  // Si les pays sont chargés, générer la première question
  if (countries.length && nbsRandom.length === 0) {
    handleNextQuestion();
  }

  if (questionCount >= 10) {
    return (
      <h2>
        {score}/10 -{" "}
        {score === 10
          ? "Félicitations un vrai globe-trotters !"
          : score >= 8
            ? "Un petit effort et tu seras au top !"
            : score >= 6
              ? "Continue à explorer !"
              : score >= 4
                ? "Tu es sur la bonne voie mais il reste encore beaucoup à découvrir !"
                : score >= 2
                  ? "Ce n'est qu'un début, mais il te reste encore du chemin à parcourir !"
                  : "Tu as encore du chemin à faire !"}
      </h2>
    );
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
            disabled={isAnswerSelected}
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

      <dialog className={isValidate ? "good" : "notGood"} open={dialogOpen}>
        <p> reponse choisit : {countries[userChoiceIndex].name.common} </p>
        <p>
          {countries[userChoiceIndex].name.common ===
          countries[goodAnswer].name.common
            ? "Bien joué ! "
            : `Dommage, la réponse était ${countries[goodAnswer].name.common} `}
        </p>
        <button type="button" onClick={handleNextQuestion}>
          Question suivante
        </button>
      </dialog>

      <div>
        <p>Votre score : {score} / 10.</p>
      </div>
    </>
  );
}
