import { useEffect, useState } from "react";

function useTimer(isAnswerSelected: boolean) {
  const [timer, setTimer] = useState(10);
  const [timerColor, setTimerColor] = useState("green");

  useEffect(() => {
    if (timer > 0 && !isAnswerSelected) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => {
          const newTimer = prevTimer - 1;
          if (newTimer <= 6) {
            setTimerColor("orange");
          }
          if (newTimer <= 3) {
            setTimerColor("red");
          }
          return newTimer;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer, isAnswerSelected]);

  return { timer, timerColor, setTimer, setTimerColor };
}

export default useTimer;
