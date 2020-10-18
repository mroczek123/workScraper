import {
  convertToCountryCodeIso3166Alpha2UpperCase,
  convertToCurrencyIso4217UpperCase,
} from "@src/packages/localization/converters";
import { CountryCodeIso3166Alpha2UpperCase } from "@src/packages/localization/models/countrycodeiso3166alpha2uppercase";
import { JobOfferSimple, Location, Salary } from "@src/packages/offers/models";
import { NoFluffJobsJobOfferSimple } from "./data-definitions/classes";
import {
  contractTypeToNormalizedEmploymentTypeMap,
  seniorityToNormalizedSeniorityMap,
} from "./normalizer-mapping";

export default function normalizer(
  jobOffer: NoFluffJobsJobOfferSimple,
  url: string,
): JobOfferSimple {
  return new JobOfferSimple({
    id: jobOffer.id,
    url: url,
    title: jobOffer.title,
    salaries: normalizeSalary(jobOffer),
    company: {
      logoUrl: `https://nofluffjobs.com${jobOffer.logo}`,
      name: jobOffer.name,
    },
    publishedAt: new Date(jobOffer.posted),
    remote: jobOffer.location.fullyRemote,
    remoteInterview: jobOffer.onlineInterviewAvailable,
    seniority: jobOffer.seniority.map((seniority) => seniorityToNormalizedSeniorityMap[seniority]),
    mainTechnology: jobOffer.technology ? jobOffer.technology : null,
    locations: normalizeLocations(jobOffer),
  });

  function normalizeSalary(input: NoFluffJobsJobOfferSimple): Array<Salary> {
    const output = [];
    const salary: Salary = {
      from: input.salary.from,
      to: input.salary.to,
      currency: convertToCurrencyIso4217UpperCase(input.salary.currency),
      employmentType: contractTypeToNormalizedEmploymentTypeMap[input.salary.type],
    };
    output.push(salary);
    return output;
  }

  function normalizeLocations(input: NoFluffJobsJobOfferSimple): Array<Location> {
    return input.location.places.map((location) => {
      const loc: Location = {
        city: location.city,
        countryCode: location.country
          ? convertToCountryCodeIso3166Alpha2UpperCase(location.country.code)
          : CountryCodeIso3166Alpha2UpperCase.Poland,
        street: location.street ? location.street : null,
        coordinates: null,
      };
      return loc;
    });
  }
}
