import { url } from "@src/packages/common/types";
import { Salary, Skill, JobOfferDetailed, Location } from "@src/packages/offers/models";
import { JobOfferDetailResponse } from "./data-definitions";
import { currencyToNormalizedCurrencyMap, employmentTypeToNormalizedEmploymentTypeMap, experienceLevelToNormalizedSeniorityMap, skillLevelToNormalizedSeniorityMap } from "./normalizer-mappings";


export default function normalize(data: JobOfferDetailResponse, url: url): JobOfferDetailed {
  const normalized: JobOfferDetailed = {
    url: url,
    title: data.title,
    description: data.body,
    skills: normalizeSkills(data),
    salaries: normalizeSalary(data),
    locations: normalizeLocation(data),
    seniority: [experienceLevelToNormalizedSeniorityMap[data.experience_level]],
    publishedAt: new Date(data.published_at),
    companyName: data.company_name,
    remote: data.remote,
    remoteInterview: data.remote_interview
  }

  return normalized;
  function normalizeSkills(data: JobOfferDetailResponse): Array<Skill> {
    return data.skills.map((skill) => {
      const normalizedSkill: Skill = {
        name: skill.name,
        level: skillLevelToNormalizedSeniorityMap[skill.level]
      }
      return normalizedSkill;
    })
  }

  function normalizeSalary(data: JobOfferDetailResponse): Array<Salary> {
    const output: Array<Salary> = [];

    if (data.salary_from && data.salary_to && data.salary_currency && data.employment_type) {
      const salary: Salary = {
        from: data.salary_from,
        to: data.salary_to,
        currency: currencyToNormalizedCurrencyMap[data.salary_currency],
        employmentType: employmentTypeToNormalizedEmploymentTypeMap[data.employment_type]
      }
      output.push(salary);
    }
    return output;
  }

  function normalizeLocation(data: JobOfferDetailResponse): Array<Location> {
    const loc: Location = {
      city: data.city,
      street: data.street,
      countryCode: data.country_code,
      coordinates: {
        latitude: parseFloat(data.latitude),
        longitude: parseFloat(data.longitude)
      }
    }
    return [loc]
  }
}