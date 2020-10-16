import { convertToCountryCodeIso3166Alpha2UpperCase } from "@src/packages/localization/converters";
import { COUNTRIES } from "@src/packages/localization/models/countries";

import {
  EmploymentType,
  JobOfferSimple,
  Location,
  Salary,
  Seniority,
} from "@src/packages/offers/models";
import { RemoteTypeChoices } from "./data-definitions/enums";
import { JobsForGeekJobOfferSimple } from "./data-definitions/classes";

export function normalize(input: JobsForGeekJobOfferSimple, urlstring: string): JobOfferSimple {
  return {
    id: input.id,
    url: urlstring,
    title: input.jobTitle,
    salaries: normalizeSalary(input),
    company: {
      name: input.companyName,
      logoUrl: input.logoId ? `https://jobsforgeek.com/api/public/logo/${input.logoId}` : null,
    },
    publishedAt: new Date(input.publishedTime),
    remote: input.remoteType == RemoteTypeChoices.FULL_REMOTE_WORK,
    remoteInterview: input.onlineInterview ? input.onlineInterview : false,
    locations: normalizeLocations(input),
    seniority: normalizeSeniority(input),
    mainTechnology: "", // TODO
  };

  function normalizeLocations(input: JobsForGeekJobOfferSimple): Array<Location> {
    const output: Array<Location> = [];
    if (!input.city) {
      return output;
    }
    const location: Location = {
      city: input.city,
      street: null,
      countryCode: convertToCountryCodeIso3166Alpha2UpperCase(input.country),
      coordinates: null,
    };
    if (input.lat && input.lng) {
      location.coordinates = {
        latitude: input.lat,
        longitude: input.lng,
      };
    }
    output.push(location);
    return output;
  }

  function normalizeSalary(input: JobsForGeekJobOfferSimple): Array<Salary> {
    const output: Array<Salary> = [];
    if (!input.b2bSalaryFrom && !input.b2bSalaryTo) {
      return output;
    }
    const salary: Salary = {
      from: (input.b2bSalaryFrom ? input.b2bSalaryFrom : input.employmentSalaryFrom) || null,
      to: (input.b2bSalaryTo ? input.b2bSalaryTo : input.employmentSalaryTo) || null,
      currency:
        COUNTRIES.find(
          (countryIter) =>
            countryIter.countryName.toUpperCase().split(" ").join("_") == input.country,
        )?.currencyCode || null,
      employmentType: input.b2bSalaryFrom
        ? EmploymentType.B2B
        : input.employmentSalaryFrom
        ? EmploymentType.PERMANENT
        : null,
    };
    output.push(salary);
    return output;
  }
  function normalizeSeniority(input: JobsForGeekJobOfferSimple): Array<Seniority> {
    const expMonths = input.experience;
    if (expMonths < 0) {
      return [Seniority.TRAINEE];
    } else if (expMonths < 12) {
      return [Seniority.JUNIOR];
    } else if (expMonths < 36) {
      return [Seniority.MID];
    } else if (expMonths < 60) {
      return [Seniority.SENIOR];
    }
    return [Seniority.EXPERT];
  }
}
