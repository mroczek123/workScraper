import { CountryNamesUpperCase } from "@src/packages/localization/country-codes";
import { B2bFrequencyChoices, CategoryChoices, CityChoices, EmploymentFrequencyChoices, RemoteTypeChoices } from "./enums";

export interface JobsForGeekJobOfferSimple {
  id: number;
  featured: boolean;
  logoId?: number;
  jobTitle: string;
  companyName: string;
  city?: CityChoices;
  country: CountryNamesUpperCase;
  websiteAddress: string;
  skills?: Array<string>;
  b2bSalaryFrom?: number;
  b2bSalaryTo?: number;
  remoteType: RemoteTypeChoices;
  category: CategoryChoices;
  lastBumpTime: string;
  publishedTime: string;
  b2bFrequency?: B2bFrequencyChoices;
  lat?: number;
  lng?: number;
  experience: number; // in months
  onlineInterview?: boolean;
  employmentSalaryFrom?: number;
  employmentSalaryTo?: number;
  videoLink?: string;
  employmentFrequency?: EmploymentFrequencyChoices;
}
