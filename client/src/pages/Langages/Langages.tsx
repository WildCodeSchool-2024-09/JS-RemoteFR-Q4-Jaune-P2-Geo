import { useState } from "react";
import Result from "../../components/Result";

export default function Langages({ countries }: ThemeProps) {
  const [nbsRandom, setNbsRandom] = useState([] as number[]);
  const [goodAnswer, setGoodAnswer] = useState(0 as number);
  const [questionCount, setQuestionCount] = useState(0);
  const [userChoiceIndex, setUserChoiceIndex] = useState(0 as number);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);

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

  // Si les pays sont chargés, générer la première question
  if (countries.length && nbsRandom.length === 0) {
    handleNextQuestion();
  }

  if (questionCount === 11) {
    return <Result score={score} />;
  }
  return (
    <>
      <div className="conteneurTitleScore">
        <img
          className="imgTheme"
          src={"/public/images/Langues.png"}
          alt="Un boutton nuage où se trouve un texte Capital"
        />
        <p className="score"> {score} / 10</p>
      </div>

      <div className="conteneurTheme">
        <h2>
          {questionCount} - Quel est le langage du pays :
          {countries[goodAnswer].name.common} ?
        </h2>

        <div className="answers-container">
          {nbsRandom.map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleChoiseAnswer(index)}
            >
              {Object.values(countries[index].languages).join(", ")}
            </button>
          ))}
        </div>

        <dialog className={isValidate ? "good" : "notGood"} open={dialogOpen}>
          <p>
            {" "}
            Réponse choisit :{" "}
            {Object.values(countries[userChoiceIndex].languages).join(
              ", ",
            )}{" "}
          </p>
          <p>
            {countries[userChoiceIndex].name.common ===
            countries[goodAnswer].name.common
              ? "Bien joué ! C'était bien :"
              : "Dommage, la réponse était :"}
          </p>
          <p className="goodAnswer">
            {Object.values(countries[goodAnswer].languages).join(", ")}
          </p>
          <button type="button" onClick={handleNextQuestion}>
            Question suivante
          </button>
        </dialog>
      </div>
    </>
  );
}
