import { useEffect, useState } from "react";
import generateAnswer from "../GenerateAnswer";

function useQuestion(
  countries: CountriesType[],
  setIsAnswerSelected: (answer: boolean) => void,
  isAnswerSelected: boolean,
  setTimer: (num: number) => void,
  setTimerColor: (color: string) => void,
  timer: number,
) {
  const [nbsRandom, setNbsRandom] = useState([] as number[]);
  const [goodAnswer, setGoodAnswer] = useState(0 as number);
  const [questionCount, setQuestionCount] = useState(0);
  const [userChoiceIndex, setUserChoiceIndex] = useState(0 as number);
  const [score, setScore] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isValidate, setIsValidate] = useState(false);

  useEffect(() => {
    if (timer === 0) {
      setDialogOpen(true);
      setIsValidate(false);
      setIsAnswerSelected(true);
      return;
    }
  }, [timer, setIsAnswerSelected]);

  const handleNextQuestion = () => {
    const randomAnswers = generateAnswer(countries);
    const correctAnswer =
      randomAnswers[Math.floor(Math.random() * randomAnswers.length)];

    setNbsRandom(randomAnswers); // Met à jour les réponses possibles
    setGoodAnswer(correctAnswer); // Met à jour la bonne réponse
    setQuestionCount((prevCount) => prevCount + 1);
    closeDialog();
    setIsAnswerSelected(false);
    setTimer(10);
    setTimerColor("green");
  };

  const handleChoiceAnswer = (countryIndex: number) => {
    if (isAnswerSelected) return;
    setIsAnswerSelected(true);

    setUserChoiceIndex(countryIndex);
    setDialogOpen(true);

    if (countryIndex === goodAnswer) {
      setIsValidate(true);
      setScore((prevScore) => prevScore + 1);
    } else {
      setIsValidate(false);
    }
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  // Si les pays sont chargés, générer la première question
  if (countries.length && nbsRandom.length === 0) {
    handleNextQuestion();
  }

  return {
    score,
    questionCount,
    userChoiceIndex,
    goodAnswer,
    nbsRandom,
    handleChoiceAnswer,
    handleNextQuestion,
    dialogOpen,
    isValidate,
  };
}

export default useQuestion;
