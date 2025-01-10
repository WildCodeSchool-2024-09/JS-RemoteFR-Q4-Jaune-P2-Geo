export default function Theme() {
  return (
    <>
      <div className="theme">
        <h2 className="title-themes">
          <b>Choisie un thème !</b>
        </h2>

        {/* Les 4 bouttons thèmes */}
        <div className="containers-themes">
          <button type="button" className="button-Capitales">
            <img
              src={"/public/images/Capitales.png"}
              alt="Un boutton nuage où se trouve un texte Capitales"
            />
          </button>

          <button type="button" className="button-Drapeau">
            <img
              src={"/public/images/drapeaux.png"}
              alt="Un boutton nuage où se trouve un texte Drapeau"
            />
          </button>

          <button type="button" className="button-Monnaies">
            <img
              src={"/public/images/Monnaies.png"}
              alt="Un boutton nuage où se trouve un texte Monnaies"
            />
          </button>

          <button type="button" className="button-Langues">
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
