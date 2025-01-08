import ShowQuestion from "../../components/ShowQuestion";
export default function Quizz() {
  return (
    <>
      <h2>Thème</h2> {/* Recuper en props le thème choisit */}
      <ShowQuestion />
    </>
  );
}
