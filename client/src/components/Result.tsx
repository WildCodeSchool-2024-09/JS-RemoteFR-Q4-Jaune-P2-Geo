import { useState } from "react";

export default function Result({ score }: ScoreType) {
  const reloadPage = () => {
    window.location.reload();
  };
  const [message, setMessage] = useState("");
  console.info(score);

  if (score === 10) {
    console.info("10");
    setMessage("Félicitations, un vrai globe-trotter !");
  }
  if (score >= 8 && score < 10) {
    console.info("8");
    setMessage("Un petit effort et tu seras au top !");
  }

  if (score >= 6 && score < 8) {
    console.info("6");
    setMessage("Continue à explorer !");
  }

  if (score >= 4 && score < 6) {
    console.info("4");
    setMessage(
      "Tu es sur la bonne voie, mais il reste encore beaucoup à découvrir!",
    );
  }
  if (score >= 2 && score < 4) {
    console.info("2");
    setMessage(
      " Ce n'est qu'un début, mais il te reste encore du chemin à parcourir !",
    );
  } else {
    console.info("2");
    setMessage("");
  }

  return (
    <>
      <div className="contenerResult">
        <h1>Bravo !</h1>
        <div className="result">
          <h2>Tu obtiens une note de :</h2>
          <p className="scoreFinal">{score}/10</p>
          <p>{message}</p>
        </div>
      </div>
      <button className="buttonPlayAgain" type="button" onClick={reloadPage}>
        Rejouer
      </button>
    </>
  );
}
