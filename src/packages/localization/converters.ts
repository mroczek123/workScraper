import { CountryCodeIso3166Alpha2, CountryCodesIso3166Alpha2AndAlpha3 } from "./country-codes";
import { CurrencyIso4217UpperCase } from "./currencies";


export function convertToCountryCodeIso3166Alpha2(input: string): CountryCodeIso3166Alpha2 {
  /**
   * supports inputs: iso3166Alpha2, iso3166Alpha3, full country name TODO: (need to add some fuzzy search)
   */
  const inputUpperCase = input.toUpperCase();
  let output;
  if (inputUpperCase in CountryCodeIso3166Alpha2) {
    output = inputUpperCase;
  } else if (inputUpperCase.length == 3) { // probably Iso3166Alpha3
    output = Object.entries(CountryCodesIso3166Alpha2AndAlpha3).find(([, val]) => val.alpha3 === inputUpperCase)?.[1].alpha2;
  } else { // probably full country name
    output = Object.entries(CountryCodesIso3166Alpha2AndAlpha3).find(([key]) => key.toUpperCase() === inputUpperCase)?.[1].alpha2;
  }

  // REMOVE AS
  return output as CountryCodeIso3166Alpha2;
}


export function convertToCurrencyIso4217UpperCase(input: string): CurrencyIso4217UpperCase {
  const inputUpperCase = input.toUpperCase();
  if (inputUpperCase in CurrencyIso4217UpperCase) {
    return inputUpperCase as CurrencyIso4217UpperCase;
  } else if (inputUpperCase.length > 2){
    // TODO: full currency name case
  }

  // REMOVE MOCK ?
  return CurrencyIso4217UpperCase.PLN;
}
