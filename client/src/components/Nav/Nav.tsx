import { Link } from "react-router-dom";

export default function Nav() {
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
