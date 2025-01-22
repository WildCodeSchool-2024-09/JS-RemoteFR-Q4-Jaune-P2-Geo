export default function Result({ score }: ScoreType) {
  const reloadPage = () => {
    window.location.reload();
  };
  if (score === 10) {
    return (
      <>
        <div className="contenerResult">
          <h1>Bravo !</h1>
          <div className="result">
            <h2>Tu obtiens une note de :</h2>
            <p className="scoreFinal">{score}/10</p>
            <p>Félicitations, un vrai globe-trotter !</p>
          </div>
        </div>
        <button className="buttonPlayAgain" type="button" onClick={reloadPage}>
          Rejouer
        </button>
      </>
    );
  }
  if (score >= 8) {
    return (
      <>
        <div className="contenerResult">
          <h1>Bravo !</h1>
          <div className="result">
            <h2>Tu obtiens une note de :</h2>
            <p className="scoreFinal">{score}/10</p>
            <p>Un petit effort et tu seras au top !</p>
          </div>
        </div>
        <button className="buttonPlayAgain" type="button" onClick={reloadPage}>
          Rejouer
        </button>
      </>
    );
  }
  if (score >= 6) {
    return (
      <>
        <div className="contenerResult">
          <h1>Bravo !</h1>
          <div className="result">
            <h2>Tu obtiens une note de :</h2>
            <p className="scoreFinal">{score}/10</p>
            <p>Continue à explorer !</p>
          </div>
        </div>
        <button className="buttonPlayAgain" type="button" onClick={reloadPage}>
          Rejouer
        </button>
      </>
    );
  }
  if (score >= 4) {
    return (
      <>
        <div className="contenerResult">
          <h1>Bravo !</h1>
          <div className="result">
            <h2>Tu obtiens une note de :</h2>
            <p className="scoreFinal">{score}/10</p>
            <p>
              Tu es sur la bonne voie, mais il reste encore beaucoup à découvrir
              !
            </p>
          </div>
        </div>
        <button className="buttonPlayAgain" type="button" onClick={reloadPage}>
          Rejouer
        </button>
      </>
    );
  }
  if (score >= 2) {
    return (
      <>
        <div className="contenerResult">
          <h1>Bravo !</h1>
          <div className="result">
            <h2>Tu obtiens une note de :</h2>
            <p className="scoreFinal">{score}/10</p>
            <p>
              Ce n'est qu'un début, mais il te reste encore du chemin à
              parcourir !
            </p>
          </div>
        </div>
        <button className="buttonPlayAgain" type="button" onClick={reloadPage}>
          Rejouer
        </button>
      </>
    );
  }
  return (
    <>
      <div className="contenerResult">
        <h1>Bravo !</h1>
        <div className="result">
          <h2>Tu obtiens une note de :</h2>
          <p className="scoreFinal">{score}/10</p>
          <p>Tu as encore du chemin à faire !</p>
        </div>
      </div>
      <button className="buttonPlayAgain" type="button" onClick={reloadPage}>
        Rejouer
      </button>
    </>
  );
}
