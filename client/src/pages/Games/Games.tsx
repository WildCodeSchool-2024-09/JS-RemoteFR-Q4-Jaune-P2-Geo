import { useState } from "react";
import Capitals from "../../pages/Capitals/Capitals";
import Flags from "../../pages/Flags/Flags";
import Langages from "../../pages/Langages/Langages";
import Money from "../Money/Money";

export default function Games() {
  // requête API

  const [gameMode, setGameMode] = useState("");

  const changeMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    setGameMode(e.currentTarget.value);
  };

  const displayMode = () => {
    if (gameMode === "capitals") {
      return <Capitals />;
    }
    if (gameMode === "flags") {
      return <Flags />;
    }
    if (gameMode === "money") {
      return <Money />;
    }
    if (gameMode === "langages") {
      return <Langages />;
    }
  };

  if (gameMode) {
    return displayMode();
  }

  if (!gameMode) {
    return (
      <>
        <div className="home_theme">
          <div className="home">
            <h1>GEO QUIZ</h1>
          </div>

          <div className="theme">
            <h2 className="title-themes">
              <b>Choisie un thème !</b>
            </h2>

            <div className="containers-themes">
              <button
                type="button"
                value="capitals"
                onClick={changeMode}
                className="btn-Capitals"
              >
                <img
                  src={"/public/images/Capitales.png"}
                  alt="Un boutton nuage où se trouve un texte Capitales"
                />
              </button>

              <button
                type="button"
                value="flags"
                onClick={changeMode}
                className="btn-Flags"
              >
                <img
                  src={"/public/images/drapeaux.png"}
                  alt="Un boutton nuage où se trouve un texte Drapeau"
                />
              </button>

              <button
                type="button"
                value="money"
                onClick={changeMode}
                className="btn-Money"
              >
                <img
                  src={"/public/images/Monnaies.png"}
                  alt="Un boutton nuage où se trouve un texte Monnaies"
                />
              </button>

              <button
                type="button"
                value="langages"
                onClick={changeMode}
                className="btn-Langages"
              >
                <img
                  src={"/public/images/Langues.png"}
                  alt="Un boutton nuage où se trouve un texte Langues"
                />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
