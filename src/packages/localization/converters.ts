import { CountryCodeIso3166Alpha2 } from "./country-codes";
import { CurrencyIso4217UpperCase } from "./currencies";

// TODO !
export function convertToCountryCodeIso3166Alpha2(input: string): CountryCodeIso3166Alpha2 {
  /**
   * supports inputs: iso3166Alpha3, full country name
   */
  return CountryCodeIso3166Alpha2.Poland;
}

// TODO !
export function convertToCurrencyIso4217UpperCase(input: string): CurrencyIso4217UpperCase {
  return CurrencyIso4217UpperCase.PLN;
}
