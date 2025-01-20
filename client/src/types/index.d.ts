interface CountriesType {
  name: {
    common: string;
  };
  flags: {
    png: string;
  };
}

interface FlagsProps {
  countries: CountriesType[]; // `countries` est un tableau d'objets `CountriesType`
}
