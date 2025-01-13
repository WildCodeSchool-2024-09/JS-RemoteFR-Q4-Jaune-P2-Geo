import axios from "axios";
import { useEffect, useState } from "react";

interface CountriesType {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
}

export default function Quizz() {
  const [countries, setCountries] = useState([] as CountriesType[]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
      });
  }, []);

  // const nbsRandom: number[] = [];

  if (countries.length) {
    const generateAnswer = () => {
      return Array.from({ length: 3 }, () =>
        Math.floor(Math.random() * countries.length),
      );
    };

    const nbsRandom = generateAnswer();

    const goodAnswerIndex = Math.floor(Math.random() * nbsRandom.length - 1);
    const goodAnswer = nbsRandom[goodAnswerIndex];

    if (isLoading || !goodAnswer) {
      return <h3>loading refresh</h3>;
    }

    return (
      <>
        <h2>Thème</h2>
        <h3> Quel est le drapeau de {countries[goodAnswer].name.common} ?</h3>
        <p>good answer : </p>
        <img src={countries[goodAnswer].flags.png} alt="" />
        <p>réponses possibles : </p>
        <img src={countries[nbsRandom[0]].flags.png} alt="" />
        <img src={countries[nbsRandom[1]].flags.png} alt="" />
        <img src={countries[nbsRandom[2]].flags.png} alt="" />
      </>
    );
  }
}
