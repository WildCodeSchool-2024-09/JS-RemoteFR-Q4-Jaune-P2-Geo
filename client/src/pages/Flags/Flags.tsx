import { useEffect, useState } from "react";
import Result from "../../components/Result";

export default function Flags({ countries }: ThemeProps) {
  const [nbsRandom, setNbsRandom] = useState([] as number[]);
  const [goodAnswer, setGoodAnswer] = useState(0 as number);
  const [questionCount, setQuestionCount] = useState(0);
  const [userChoiceIndex, setUserChoiceIndex] = useState(0 as number);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isValidate, setIsValidate] = useState(false);
  const [score, setScore] = useState(0);
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [timer, setTimer] = useState(10);

  //Timer
  useEffect(() => {
    if (timer > 0 && !isAnswerSelected) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
    if (timer === 0) {
      setDialogOpen(true);
      setIsValidate(false);
      setIsAnswerSelected(true);
    }
  }, [timer, isAnswerSelected]);

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
    setTimer(10);
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
    console.info("cc");
    return <Result score={score} />;
  }

  return (
    <>
      <div className="timer">{timer}</div>
      <div className="conteneurTitleScore">
        <img
          className="imgTheme"
          src={"/public/images/drapeaux.png"}
          alt="Un boutton nuage où se trouve un texte Drapeau"
        />
        <p className="score"> {score} / 10</p>
      </div>

      <div className="conteneurTheme">
        <h2>
          {questionCount} - Quel est le drapeau de{" "}
          {countries[goodAnswer].name.common} ?
        </h2>

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

        <dialog className={isValidate ? "good" : "notGood"} open={dialogOpen}>
          {timer > 0 && (
            <p> Réponse choisit : {countries[userChoiceIndex].name.common} </p>
          )}
          {timer === 0 && <p>Temps écoulés !</p>}
          <p>
            {countries[userChoiceIndex].name.common ===
            countries[goodAnswer].name.common
              ? "Bien joué ! C'était bien ce drapeau :"
              : "Dommage, c'était ce drapeau :"}
          </p>
          <img
            className="flagAnswer"
            src={countries[goodAnswer].flags.png}
            alt={`Drapeau de ${countries[goodAnswer].name.common} `}
          />
          <button type="button" onClick={handleNextQuestion}>
            Question suivante
          </button>
        </dialog>
      </div>
    </>
  );
}
