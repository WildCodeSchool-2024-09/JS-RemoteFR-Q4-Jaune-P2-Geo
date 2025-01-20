import axios from "axios";
import { useEffect, useState } from "react";
import Capitals from "../../pages/Capitals/Capitals";
import Flags from "../../pages/Flags/Flags";
import Langages from "../../pages/Langages/Langages";
import Money from "../Money/Money";

export default function Games() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [gameMode, setGameMode] = useState("");

  const changeMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    setGameMode(e.currentTarget.value);
  };

  const displayMode = () => {
    if (gameMode === "capitals") {
      return <Capitals />;
    }
    if (gameMode === "flags") {
      return <Flags countries={countries} />;
    }
    if (gameMode === "money") {
      return <Money />;
    }
    if (gameMode === "langages") {
      return <Langages />;
    }
  };

  if (gameMode && countries) {
    return displayMode();
  }

  if (!gameMode) {
    return (
      <>
        <div className="home_theme">
          <h1>GEO QUIZ</h1>

          <h2>Choisie un thème !</h2>

          <div className="containers-themes">
            <button type="button" value="capitals" onClick={changeMode}>
              <img
                src={"/public/images/Capitales.png"}
                alt="Un boutton nuage où se trouve un texte Capitales"
              />
            </button>

            <button type="button" value="flags" onClick={changeMode}>
              <img
                src={"/public/images/drapeaux.png"}
                alt="Un boutton nuage où se trouve un texte Drapeau"
              />
            </button>

            <button type="button" value="money" onClick={changeMode}>
              <img
                src={"/public/images/Monnaies.png"}
                alt="Un boutton nuage où se trouve un texte Monnaies"
              />
            </button>

            <button type="button" value="langages" onClick={changeMode}>
              <img
                src={"/public/images/Langues.png"}
                alt="Un boutton nuage où se trouve un texte Langues"
              />
            </button>
          </div>
        </div>
      </>
    );
  }
}
