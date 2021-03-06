import { convertToCurrencyIso4217UpperCase } from "@src/packages/localization/converters";
import { CountryCodeIso3166Alpha2 } from "@src/packages/localization/country-codes";
import { CurrencyIso4217UpperCase } from "@src/packages/localization/currencies";
import { JobOfferSimple, Location, Salary } from "@src/packages/offers/models";
import { JustJoinItJobOfferSimple } from "./data-definitions/interfaces";
import {
  employmentTypeToNormalizedEmploymentTypeMap,
  experienceLevelToNormalizedSeniorityMap,
} from "./normalizer-mappings";

export default function normalize(input: JustJoinItJobOfferSimple, url: string): JobOfferSimple {
  return {
    id: input.id,
    url: url,
    title: input.title,
    salaries: normalizeSalary(input),
    company: {
      name: input.company_name,
      logoUrl: input.company_logo_url,
    },
    publishedAt: new Date(input.published_at),
    remote: input.remote,
    remoteInterview: input.remote_interview,
    locations: normalizeLocations(input),
    seniority: [experienceLevelToNormalizedSeniorityMap[input.experience_level]],
    mainTechnology: input.marker_icon,
  };

  function normalizeSalary(input: JustJoinItJobOfferSimple): Array<Salary> {
    const output: Array<Salary> = [];
    if (!input.salary_from && !input.salary_to) {
      return output;
    }
    const salary: Salary = {
      from: input.salary_from,
      to: input.salary_to,
      currency: input.salary_currency
        ? convertToCurrencyIso4217UpperCase(input.salary_currency)
        : CurrencyIso4217UpperCase.PLN,
      employmentType: employmentTypeToNormalizedEmploymentTypeMap[input.employment_type],
    };
    output.push(salary);
    return output;
  }

  function normalizeLocations(input: JustJoinItJobOfferSimple): Array<Location> {
    const location: Location = {
      city: input.city,
      street: input.street,
      coordinates: {
        latitude: Number.parseFloat(input.latitude),
        longitude: Number.parseFloat(input.longitude),
      },
      countryCode: input.country_code ? input.country_code : CountryCodeIso3166Alpha2.Poland,
    };
    return [location];
  }
}
