import { useEffect, useState } from "react";

export default function Result({
  score,
  message,
  setMessage,
}: propsResultType) {
  const [messageScore, setMessageScore] = useState("");
  const [scores, setScores] = useState([] as number[]);

  const reloadPage = () => {
    window.location.reload();
  };

  useEffect(() => {
    // Récupérer les scores depuis le localStorage
    const storedScores = localStorage.getItem("scores");
    const scoresArray = storedScores ? JSON.parse(storedScores) : [];
    setScores(scoresArray);
    if (score === 10) {
      setMessage("Félicitations, un vrai globe-trotter !");
    }
    if (score >= 8 && score < 10) {
      setMessage("Un petit effort et tu seras au top !");
    }

    if (score >= 6 && score < 8) {
      setMessage("Continue à explorer !");
    }

    if (score >= 4 && score < 6) {
      setMessage(
        "Tu es sur la bonne voie, mais il reste encore beaucoup à découvrir!",
      );
    }
    if (score >= 2 && score < 4) {
      setMessage(
        " Ce n'est qu'un début, mais il te reste encore du chemin à parcourir !",
      );
    }
    if (score >= 0 && score < 2) {
      setMessage(" Tu as encore du chemain à faire");
    }
    // Mettre à jour les scores si le nouveau score n'est pas inclus
    if (!scoresArray.includes(score)) {
      scoresArray.push(score);
      scoresArray.sort((a: number, b: number) => b - a); // Trier les scores
      localStorage.setItem("scores", JSON.stringify(scoresArray));
      setScores(scoresArray);
      setMessageScore("Nouveau score ajouté !");
    }
  }, [setMessage, score]);

  return (
    <>
      <h1>Bravo !</h1>

      <div className="contenerResult">
        <div className="result">
          <h2>Tu obtiens une note de :</h2>
          <p className="scoreFinal">{score}/10 </p>
          <p>{message}</p>
        </div>

        <div className="topScore">
          <h2>Top scores :</h2>
          <ul>
            {scores.map((score) => (
              <li key={score}>{score}/10</li>
            ))}
          </ul>
          <p>{messageScore}</p>
        </div>
      </div>

      <button className="buttonPlayAgain" type="button" onClick={reloadPage}>
        Rejouer
      </button>
    </>
  );
}
