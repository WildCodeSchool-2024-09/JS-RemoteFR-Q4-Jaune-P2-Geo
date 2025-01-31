import { useState } from "react";

import Result from "../../components/Result";
import useQuestion from "../../services/hooks/useQuestion";
import useTimer from "../../services/hooks/useTimer";

export default function Flags({ countries }: ThemeProps) {
  const [isAnswerSelected, setIsAnswerSelected] = useState(false);
  const [message, setMessage] = useState("");

  const { timer, timerColor, setTimer, setTimerColor } =
    useTimer(isAnswerSelected);

  const {
    score,
    questionCount,
    userChoiceIndex,
    goodAnswer,
    nbsRandom,
    handleChoiceAnswer,
    handleNextQuestion,
    dialogOpen,
    isValidate,
  } = useQuestion(
    countries,
    setIsAnswerSelected,
    isAnswerSelected,
    setTimer,
    setTimerColor,
    timer,
  );

  if (questionCount === 11) {
    return <Result score={score} message={message} setMessage={setMessage} />;
  }
  return (
    <>
      <div className="conteneurTitleScore">
        <div className="timer" style={{ color: timerColor }}>
          {timer}
        </div>

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
              onClick={() => handleChoiceAnswer(index)}
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
      </div>
      <div className="conteneurDialog">
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
