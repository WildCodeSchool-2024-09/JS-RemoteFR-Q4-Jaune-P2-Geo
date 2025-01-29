// Fonction pour générer des indices de pays aléatoires UNIQUE (condition if)

const generateAnswer = (countries: CountriesType[]): number[] => {
  const arrayNbs: number[] = [];
  while (arrayNbs.length < 3) {
    const num = Math.floor(Math.random() * countries.length);
    if (!arrayNbs.includes(num)) {
      arrayNbs.push(num);
    }
  }
  return arrayNbs;
};

export default generateAnswer;
