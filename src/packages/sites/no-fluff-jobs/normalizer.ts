import { JobOfferSimple, Location, Salary } from "@src/packages/offers/models";
import { NoFluffJobsJobOfferSimple } from "./data-definitions/interfaces";
import {
  contractTypeToNormalizedEmploymentTypeMap,
  currencyToNormalizedCurrencyMap,
  seniorityToNormalizedSeniorityMap,
} from "./normalizer-mapping";

export default function normalizer(
  jobOffer: NoFluffJobsJobOfferSimple,
  url: string,
): JobOfferSimple {
  return {
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
  };

  function normalizeSalary(input: NoFluffJobsJobOfferSimple): Array<Salary> {
    const output = [];
    const salary: Salary = {
      from: input.salary.from,
      to: input.salary.to,
      currency: currencyToNormalizedCurrencyMap[input.salary.currency],
      employmentType: contractTypeToNormalizedEmploymentTypeMap[input.salary.type],
    };
    output.push(salary);
    return output;
  }

  function normalizeLocations(input: NoFluffJobsJobOfferSimple): Array<Location> {
    return input.location.places.map((location) => {
      const loc: Location = {
        city: location.city,
        countryCode: (location.country ? location.country : "PL") as string, // TODO: zmapować TODO: remove AS
        street: location.street ? location.street : null,
        coordinates: { latitude: 0, longitude: 0 }, // TODO: rozkmina na podstawie miasta i ulicy
      };
      return loc;
    });
  }
}
