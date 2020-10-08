import { CountryCodeChoices, MarkerIconChoices, ExperienceLevelChoices, SalaryCurrencyChoices, EmploymentTypeChoices } from "./enums";

export interface JustJoinItJobOfferSimple {
  title: string;
  street: string | null;
  city: CityChoices;
  country_code: CountryCodeChoices | null;
  address_text: string;
  marker_icon: MarkerIconChoices;
  remote: boolean;
  company_name: string;
  company_url: string;
  company_size: string;
  experience_level: ExperienceLevelChoices;
  salary_from: number | null;
  salary_to: number | null;
  salary_currency: SalaryCurrencyChoices | null;
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