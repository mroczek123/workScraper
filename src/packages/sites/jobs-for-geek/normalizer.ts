import { url } from "@src/packages/common/types";
import { Currency } from "@src/packages/currencies/models";
import { EmploymentType, JobOfferSimple, Salary } from "@src/packages/offers/models";

export default function normalizer(input: JobsForGeekJobOfferSimple, urlstring: url): JobOfferSimple {
  return {
    id: input.id,
    url: urlstring,
    title: input.jobTitle,
    salaries: normalizeSalary(input),
    company: {
      name: input.companyName,
      logo: input.logoId ? `https://jobsforgeek.com/api/public/logo/${input.logoId}` : null,
    },
  };

  function normalizeSalary(input: JobsForGeekJobOfferSimple): Array<Salary> {
    const output = [];
    if (input.b2bSalaryFrom || input.b2bSalaryTo) {
      output.push({
        from: input.b2bSalaryFrom,
        to: input.b2bSalaryTo,
        currency: Currency.PLN,
        employmentType: EmploymentType.B2B,
      } as Salary);
    }
    return output;
  }
}
