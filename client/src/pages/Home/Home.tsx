import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="home_theme">
        <div className="home">
          <h1>GEO QUIZ</h1>

          {/* <button type="button" </button>
            <img src={"/public/images/planetes.png"} alt="view of earth" />
          </button>
           */}
          <Link to="/Games" className="link-planet">
            <img
              src="/public/images/planetes.png"
              alt="Un boutton nuage où se trouve une pla"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
