import { COUNTRIES } from "./models/countries";
import { CountryCodeIso3166Alpha2UpperCase } from "./models/countrycodeiso3166alpha2uppercase";
import { CurrencyIso4217UpperCase } from "./models/currencyiso4217uppercase";

export function convertToCountryCodeIso3166Alpha2UpperCase(
  input: string,
): CountryCodeIso3166Alpha2UpperCase {
  /**
   * accepts: iso3166alpha2, iso3166alpha3, countryName
   */
  input = input.toUpperCase();
  let output: string | undefined;

  if (input in CountryCodeIso3166Alpha2UpperCase) {
    return input as CountryCodeIso3166Alpha2UpperCase; // TODO: remove AS
  } else if (input.length == 3) {
    // probably Iso3166Alpha3
    output = COUNTRIES.find((country) => country.countryCode.alpha3 == input)?.countryCode.alpha2;
  } else {
    // probably full country name
    output = COUNTRIES.find((country) => country.countryName.toUpperCase() == input)?.countryCode
      .alpha2;
  }

  if (!output) {
    throw Error(`Country code not found for input ${input}`);
  }
  return output as CountryCodeIso3166Alpha2UpperCase;
}

export function convertToCurrencyIso4217UpperCase(input: string): CurrencyIso4217UpperCase {
  /**
   * accepts iso4217
   */
  const inputUpperCase = input.toUpperCase();
  if (inputUpperCase in CurrencyIso4217UpperCase) {
    return inputUpperCase as CurrencyIso4217UpperCase; // TODO: remove AS
  }
  throw Error(`Currency not found for input ${input}`);
}
