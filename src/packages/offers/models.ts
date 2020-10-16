import { GeoPosition } from "@src/packages/common/types";
import { CountryCodeIso3166Alpha2UpperCase } from "../localization/models/countrycodeiso3166alpha2uppercase";
import { CurrencyIso4217UpperCase } from "../localization/models/currencyiso4217uppercase";

export interface JobOfferSimple {
  id: string | number;
  url: string;
  title: string;
  salaries: Array<Salary>;
  company: Company;
  publishedAt: Date;
  remote: boolean;
  remoteInterview: boolean;
  mainTechnology: string | null;
  locations: Array<Location>;
  seniority: Array<Seniority>;
}

export interface JobOfferDetailed extends JobOfferSimple {
  description: string; // HTML
  skills: Array<Skill>;
}

export interface Company {
  logoUrl: string | null;
  name: string;
}

export interface Salary {
  from: number | null;
  to: number | null;
  currency: CurrencyIso4217UpperCase | null;
  employmentType: EmploymentType | null;
}

export interface Location {
  city: string;
  street: string | null;
  coordinates: GeoPosition | null;
  countryCode: CountryCodeIso3166Alpha2UpperCase;
}

export interface Skill {
  name: string;
  level: Seniority;
}

export enum Seniority {
  TRAINEE = "trainee",
  JUNIOR = "junior",
  MID = "mid",
  SENIOR = "senior",
  EXPERT = "expert",
}

export enum EmploymentType {
  B2B = "b2b",
  PERMANENT = "permanent",
  MANDATE_CONTRACT = "mandate_contract",
  UOD = "uod",
}
