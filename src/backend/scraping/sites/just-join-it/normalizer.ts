import { url } from "@src/packages/common/types";
import { Currency } from "@src/packages/currencies/models";
import { Salary, Skill, Seniority, JobOffer, Location, EmploymentType } from "../../offers/models";
import { Currency as JJITCurrency, JobOfferDetailResponse, SkillLevel, EmploymentType as JJITEmploymentType, ExperienceLevel } from "./data-definitions";


export function normalize(data: JobOfferDetailResponse, url: url): Promise<JobOffer> {
  return new Promise((resove, reject) => {
    const normalized: JobOffer = {
      url: url,
      title: data.title,
      description: data.body,
      skills: normalizeSkills(data),
      salary: normalizeSalary(data),
      location: normalizeLocation(data),
      seniority: normalizeSeniority(data),
      publishedAt: new Date(data.published_at),
      companyName: data.company_name,
      remote: data.remote,
      remoteInterview: data.remote_interview
    }
    return normalized;
  })

  function normalizeSkills(data: JobOfferDetailResponse): Array<Skill> {
    function convertSkillLevelToSeniority(skillLevel: SkillLevel): Seniority {
      switch(skillLevel) {
        case SkillLevel.JUNIOR:
          return Seniority.JUNIOR;
        case SkillLevel.MID:
          return Seniority.MID
        case SkillLevel.SENIOR:
        case SkillLevel.EXPERT:
          return Seniority.SENIOR
      }
    }
    return data.skills.map((skill) => {
      const normalizedSkill: Skill = {
        name: skill.name,
        level: convertSkillLevelToSeniority(skill.level)
      }
      return normalizedSkill;
    })
  }

  function normalizeSalary(data: JobOfferDetailResponse): Salary {
    function normalizeEmploymentType(employmentType: JJITEmploymentType): EmploymentType {
      switch(employmentType) {
        case JJITEmploymentType.B2B:
          return EmploymentType.B2B
        case JJITEmploymentType.MANDATE_CONTRACT:
          return EmploymentType.MANDATE_CONTRACT
        case JJITEmploymentType.PERMANENT:
          return EmploymentType.PERMANENT
      }
    }

    // TODO: implement
    function normalizeCurrency(currency: JJITCurrency): Currency {
      return Currency.PLN
    }

    const salary: Salary = {
      from: data.salary_from,
      to: data.salary_to,
      currency: normalizeCurrency(data.salary_currency), // TODO: WRITE CONVERTER
      employmentType: normalizeEmploymentType(data.employment_type)
    }
  
    return salary;
  }
  

  function normalizeLocation(data: JobOfferDetailResponse): Location {
    return {
      city: data.city,
      street: data.street,
      countryCode: data.country_code,
      // TODO: implement
      coordinates: {
        latitude: 0,
        longitude: 0
      }
    }
  }
  
  // TODO: implement
  function normalizeSeniority(data: JobOfferDetailResponse): Seniority {
    switch(data.experience_level) {
      case ExperienceLevel.JUNIOR:
        return Seniority.JUNIOR
      case ExperienceLevel.MID:
        return Seniority.MID
      case ExperienceLevel.SENIOR:
        return Seniority.SENIOR
    }
  }
}