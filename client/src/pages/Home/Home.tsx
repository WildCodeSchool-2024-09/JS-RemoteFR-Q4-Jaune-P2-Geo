import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home">
        <h1>GEO QUIZ</h1>
        <h2> Clique sur la planète !</h2>
        <Link to="/Games">
          <img
            src="/public/images/planetes.png"
            alt="Un boutton nuage où se trouve une pla"
          />
        </Link>
      </div>
    </>
  );
}
