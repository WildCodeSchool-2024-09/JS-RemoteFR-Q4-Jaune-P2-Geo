import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Nav from "./components/Nav/Nav";

export default function App() {
  return (
    <>
      <h1>Projet 2</h1>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}
