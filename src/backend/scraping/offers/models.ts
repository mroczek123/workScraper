import { url, html, GeoPosition } from "@src/packages/common/types";
import { Currency } from "@src/packages/currencies/models";


export enum EmploymentType {
  B2B = "b2b",
  PERMANENT = "permanent", // Contract of Employment
  MANDATE_CONTRACT = "mandate_contract", // Contract of Mandate
}

export interface Salary {
  from: number;
  to: number;
  currency: Currency;
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
}

export interface Skill {
  name: string;
  level: Seniority
}

export interface JobOffer {
  url: url; // its used as pseudo-id to determine if JobOffer is duplicate or not
  title: string;
  description: html;
  skills: Array<Skill>;
  salary: Array<Salary>;
  location: Array<Location>;
  seniority: Array<Seniority>;
  publishedAt: Date;
  companyName: string;
  remote: boolean;
  remoteInterview: boolean;
}
