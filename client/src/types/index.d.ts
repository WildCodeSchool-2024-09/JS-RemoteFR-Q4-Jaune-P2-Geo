interface CountriesType {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
  capital: string;
  languages: string;
}

interface ThemeProps {
  countries: CountriesType[]; // `countries` est un tableau d'objets `CountriesType`
}
