import Theme from "../../components/Theme/Theme";

export default function Home() {
  return (
    <>
      <div className="home_theme">
        <div className="home">
          <h1>GEO QUIZ</h1>
          <img src="/public/images/planetes.png" alt="view of earth" />
        </div>

        <Theme />
      </div>
    </>
  );
}
