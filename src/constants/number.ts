interface PhonePrefix {
  prefix: string;
  country: string;
  country_code: string;
}

export const PREFIXES: PhonePrefix[] = [
  {
    prefix: "51",
    country: "Peru",
    country_code: "PE",
  },
  {
    prefix: "54",
    country: "Argentina",
    country_code: "AR",
  },
  {
    prefix: "1",
    country: "United States",
    country_code: "US",
  },
];
