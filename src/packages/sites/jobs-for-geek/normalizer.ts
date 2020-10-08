import { url } from "@src/packages/common/types";
import { Currency } from "@src/packages/currencies/models";
import { EmploymentType, JobOfferSimple, Location, Salary } from "@src/packages/offers/models";

export default function normalizer(input: JobsForGeekJobOfferSimple, urlstring: url): JobOfferSimple {
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
    seniority: normalizeSeniority(),
    mainTechnology:
  };

  function normalizeLocations(input: JobsForGeekJobOfferSimple): Array<Location> {
    const output: Array<Location> = [];
    if (!input.city) {
      return output;
    }
    const location: Location = {
      city: input.city,
      street: null,
      countryCode: input.country, // TODO: MAP TO COUNTRYCODE
      coordinates: null
    }
    if (input.lat && input.lng) {
      location.coordinates = {
        latitude: input.lat,
        longitude: input.lng
      }
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
      from: input.b2bSalaryFrom ? input.b2bSalaryFrom : null,
      to: input.b2bSalaryTo ? input.b2bSalaryTo : null,
      currency: Currency.PLN,
      employmentType: EmploymentType.B2B,
    }
    output.push(salary);
    return output;
  }
}
