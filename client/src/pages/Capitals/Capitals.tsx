import { useState } from "react";
import Result from "../../components/Result";
import useQuestion from "../../services/hooks/useQuestion";
import useTimer from "../../services/hooks/useTimer";

export default function Capitals({ countries }: ThemeProps) {
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
        {/* <img
          className="imgTheme"
          src={"/public/images/Capitales.png"}
          alt="Un boutton nuage où se trouve un texte Capital"
        /> */}
        <p className="score"> {score} / 10</p>
      </div>

      <div className="conteneurTheme">
        <h2>
          {questionCount} - Quel est la capitale de{" "}
          {countries[goodAnswer].name.common} ?
        </h2>

        <div className="answers-container">
          {nbsRandom.map((index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleChoiceAnswer(index)}
            >
              {countries[index].capital}
            </button>
          ))}
        </div>

        <dialog className={isValidate ? "good" : "notGood"} open={dialogOpen}>
          {timer > 0 && (
            <p> Réponse choisit : {countries[userChoiceIndex].capital[0]} </p>
          )}
          {timer === 0 && <p>Temps écoulés !</p>}
          <p>
            {countries[userChoiceIndex].name.common ===
            countries[goodAnswer].name.common
              ? "Bien joué ! C'était bien :"
              : "Dommage, la réponse était :"}
          </p>
          <p className="goodAnswer">{countries[goodAnswer].capital[0]}</p>
          <button type="button" onClick={handleNextQuestion}>
            Question suivante
          </button>
        </dialog>
      </div>
    </>
  );
}
