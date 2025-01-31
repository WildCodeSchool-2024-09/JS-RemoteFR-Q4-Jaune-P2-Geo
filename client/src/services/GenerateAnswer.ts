const generateAnswer = (countries: CountriesType[]): number[] => {
  let randomAnswers: number[];

  do {
    randomAnswers = [];
    while (randomAnswers.length < 3) {
      const num = Math.floor(Math.random() * countries.length);
      if (
        !randomAnswers.includes(num) &&
        Array.isArray(countries[num]?.capital) &&
        countries[num].capital.length > 0
      ) {
        randomAnswers.push(num);
      }
    }
  } while (
    new Set(
      randomAnswers.map((idx) =>
        JSON.stringify(countries[idx]?.languages ?? []),
      ),
    ).size < 3 ||
    new Set(
      randomAnswers.map((idx) =>
        JSON.stringify(countries[idx]?.currencies ?? []),
      ),
    ).size < 3
  );

  return randomAnswers;
};

export default generateAnswer;
