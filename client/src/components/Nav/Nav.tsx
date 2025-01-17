import { Link } from "react-router-dom";

export default function Nav() {
  // const [gameMode, setGameMode] = useState("");

  // const changeMode = () => {
  //   // useEffect
  //   console.info("cc");
  //   return <Home />;
  // };

  // const displayMode = () => {
  //   if (gameMode === "accueil") {

  //   }
  // };
  //   if (gameMode === "flags") {
  //     return <Flags />;
  //   }
  //   if (gameMode === "money") {
  //     return <Money />;
  //   }
  //   if (gameMode === "langages") {
  //     return <Langages />;
  //   }
  // };

  // if (gameMode) {
  //   return displayMode();
  // }
  return (
    <nav>
      <img
        src="/public/images/avion2.png"
        alt="C'est un logo qui represente un avion qui vole."
      />
      <ul>
        <li>
          <Link to="/"> Accueil </Link>
        </li>
        <li>
          <Link to="/Rules">Règles</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

// const [gameMode, setGameMode] = useState("");
