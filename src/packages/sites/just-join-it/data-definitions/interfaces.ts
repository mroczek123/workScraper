import { CountryCodeIso3166Alpha2 } from "@src/packages/localization/country-codes";
import { CurrencyIso4217LowerCase } from "@src/packages/localization/currencies";
import {
  MarkerIconChoices,
  ExperienceLevelChoices,
  EmploymentTypeChoices,
  CityChoices
} from "./enums";

export interface JustJoinItJobOfferSimple {
  title: string;
  street: string | null;
  city: CityChoices;
  country_code: CountryCodeIso3166Alpha2 | null;
  address_text: string;
  marker_icon: MarkerIconChoices;
  remote: boolean;
  company_name: string;
  company_url: string;
  company_size: string;
  experience_level: ExperienceLevelChoices;
  salary_from: number | null;
  salary_to: number | null;
  salary_currency: CurrencyIso4217LowerCase | null;
  latitude: string;
  longitude: string;
  employment_type: EmploymentTypeChoices;
  published_at: string;
  remote_interview: boolean;
  id: string;
  company_logo_url: string;
  skills: Array<Skills>;
}

interface Skills {
  name: string;
  level: number;
}
