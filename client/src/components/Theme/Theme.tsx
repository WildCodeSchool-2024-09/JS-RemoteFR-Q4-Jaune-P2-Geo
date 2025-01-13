import { Link } from "react-router-dom";

export default function Theme() {
  return (
    <>
      <div className="theme">
        <h2 className="title-themes">
          <b>Choisie un thème !</b>
        </h2>

        {/* Les 4 bouttons thèmes */}
        <div className="containers-themes">
          <Link to="/capitals" className="link-Capitals">
            <img
              src={"/public/images/Capitales.png"}
              alt="Un boutton nuage où se trouve un texte Capitales"
            />
          </Link>

          <Link to="/flags" className="link-Flags">
            <img
              src={"/public/images/drapeaux.png"}
              alt="Un boutton nuage où se trouve un texte Drapeau"
            />
          </Link>

          <Link to="/money" className="link-Money">
            <img
              src={"/public/images/Monnaies.png"}
              alt="Un boutton nuage où se trouve un texte Monnaies"
            />
          </Link>

          <Link to="/langages" className="link-Langages">
            <img
              src={"/public/images/Langues.png"}
              alt="Un boutton nuage où se trouve un texte Langues"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
