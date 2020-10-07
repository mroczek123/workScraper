import { html, GeoPosition, url } from "@src/packages/common/types";
import { Currency } from "@src/packages/currencies/models";

export interface JobOfferSimple {
  id: string | number;
  url: string;
  title: string;
  salaries: Array<Salary>;
  company: Company
}

export interface JobOfferDetailed extends JobOfferSimple {
  description: html;
  skills: Array<Skill>;
  locations: Array<Location>;
  seniority: Array<Seniority>;
  publishedAt: Date;
  companyName: string;
  remote: boolean;
  remoteInterview: boolean;
}

export interface Company {
  logo: url | null;
  name: string;
}

export enum EmploymentType {
  B2B = "b2b",
  PERMANENT = "permanent",
  MANDATE_CONTRACT = "mandate_contract",
}

export interface Salary {
  from: number;
  to: number;
  currency?: Currency;
  employmentType: EmploymentType;
}

export interface Location {
  city: string;
  street: string;
  coordinates: GeoPosition;
  countryCode: string;
}

export enum Seniority {
  JUNIOR = "junior",
  MID = "mid",
  SENIOR = "senior",
  EXPERT = "expert"
}

export interface Skill {
  name: string;
  level: Seniority
}
