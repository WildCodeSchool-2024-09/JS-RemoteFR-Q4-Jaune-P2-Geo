import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navigation = [
    { to: "/", text: "Accueil" },
    { to: "/Rules", text: "Règles" },
    { to: "/Contact", text: "Contact" },
  ];

  return (
    <nav>
      <img
        src="/public/images/avion2.png"
        alt="C'est un logo qui représente un avion qui vole."
        className="logo"
      />

      <button
        type="button"
        className={`menu-toggle ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        ☰
      </button>

      <ul className={`menu-links ${isOpen ? "show" : ""}`}>
        {navigation.map((nav) => (
          <li key={nav.text}>
            <Link to={nav.to} onClick={closeMenu}>
              {nav.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
