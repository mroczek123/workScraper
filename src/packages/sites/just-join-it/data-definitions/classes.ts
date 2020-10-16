import { CountryCodeIso3166Alpha2UpperCase } from "@src/packages/localization/models/countrycodeiso3166alpha2uppercase";
import { MarkerIconChoices, ExperienceLevelChoices, EmploymentTypeChoices } from "./enums";

export class JustJoinItJobOfferSimple {
  title: string;
  street: string | null;
  city: string; //camel cased normal
  country_code: CountryCodeIso3166Alpha2UpperCase | null;
  address_text: string;
  marker_icon: MarkerIconChoices;
  remote: boolean;
  company_name: string;
  company_url: string;
  company_size: string;
  experience_level: ExperienceLevelChoices;
  salary_from: number | null;
  salary_to: number | null;
  salary_currency: string | null; // Iso4217LowerCase
  latitude: string;
  longitude: string;
  employment_type: EmploymentTypeChoices;
  published_at: string;
  remote_interview: boolean;
  id: string;
  company_logo_url: string;
  skills: Array<Skill>;

  constructor(data: {
    title: string;
    street: string | null;
    city: string; //camel cased normal
    country_code: CountryCodeIso3166Alpha2UpperCase | null;
    address_text: string;
    marker_icon: MarkerIconChoices;
    remote: boolean;
    company_name: string;
    company_url: string;
    company_size: string;
    experience_level: ExperienceLevelChoices;
    salary_from: number | null;
    salary_to: number | null;
    salary_currency: string | null; // Iso4217LowerCase
    latitude: string;
    longitude: string;
    employment_type: EmploymentTypeChoices;
    published_at: string;
    remote_interview: boolean;
    id: string;
    company_logo_url: string;
    skills: Array<Skill>;
  }) {
    this.title = data.title;
    this.street = data.street;
    this.city = data.city;
    this.country_code = data.country_code;
    this.address_text = data.address_text;
    this.marker_icon = data.marker_icon;
    this.remote = data.remote;
    this.company_name = data.company_name;
    this.company_url = data.company_url;
    this.company_size = data.company_size;
    this.experience_level = data.experience_level;
    this.salary_from = data.salary_from;
    this.salary_to = data.salary_to;
    this.salary_currency = data.salary_currency;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.employment_type = data.employment_type;
    this.published_at = data.published_at;
    this.remote_interview = data.remote_interview;
    this.id = data.id;
    this.company_logo_url = data.company_logo_url;
    this.skills = data.skills.map((skill) => new Skill(skill));
  }
}

export class Skill {
  name: string;
  level: number;

  constructor(data: { name: string; level: number }) {
    this.name = data.name;
    this.level = data.level;
  }
}
