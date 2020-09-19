export enum SkillLevel {
  JUNIOR = 1,
  MID = 2,
  SENIOR = 3,
  EXPERT = 4,
}

export enum ExperienceLevel {
  JUNIOR = "junior",
  MID = "mid",
  SENIOR = "senior",
}

export enum Currency {
  PLN = "pln",
  USD = "usd",
  GBP = "gbp",
  EUR = "eur"
}

export enum EmploymentType {
  B2B = "b2b",
  PERMANENT = "permanent",
  MANDATE_CONTRACT = "mandate_contract"
}

export interface Skill {
  name: string;
  level: SkillLevel;
}

export interface JobOfferSimpleResponse {
  title: string;
  street: string;
  city: string;
  country_code: string;
  address_text: string;
  marker_icon: string;
  remote: boolean;
  company_name: string;
  company_url: string;
  company_size: string;
  experience_level: ExperienceLevel;
  salary_from ?: number;
  salary_to?: number;
  salary_currency?: Currency;
  latitude: string;
  longitude: string;
  employment_type: EmploymentType;
  published_at: string;
  remote_interview: boolean;
  id: string;
  company_logo_url: string;
  skills: Array<Skill>;
}

export interface JobOfferDetailResponse extends JobOfferSimpleResponse {
  apply_body: unknown;
  apply_url: string;
  body: string;
  custom_consent: unknown;
  custom_consent_title: string;
  future_consent: string;
  future_consent_title: string;
  information_clause: string;
  tags: Array<unknown>;
}
