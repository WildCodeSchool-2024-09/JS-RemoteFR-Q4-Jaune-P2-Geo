interface CountriesType {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  capital: string;
  languages: string;
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
}

interface ThemeProps {
  countries: CountriesType[]; // `countries` est un tableau d'objets `CountriesType`
}

type propsResultType = {
  score: number;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
};
