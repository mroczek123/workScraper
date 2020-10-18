import { GeoPosition } from "@src/packages/common/classes";
import { CountryCodeIso3166Alpha2UpperCase } from "../localization/models/countrycodeiso3166alpha2uppercase";
import { CurrencyIso4217UpperCase } from "../localization/models/currencyiso4217uppercase";

export class JobOfferSimple {
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

  constructor(data: JobOfferSimple) {
    this.id = data.id;
    this.url = data.url;
    this.title = data.title;
    this.salaries = data.salaries.map((salary) => new Salary(salary));
    this.company = new Company(data.company);
    this.publishedAt = data.publishedAt;
    this.remote = data.remote;
    this.remoteInterview = data.remoteInterview;
    this.mainTechnology = data.mainTechnology;
    this.locations = data.locations.map((location) => new Location(location));
    this.seniority = data.seniority;
  }
}

export class JobOfferDetailed extends JobOfferSimple {
  description: string; // HTML
  skills: Array<Skill>;

  constructor(data: JobOfferDetailed) {
    super(data);
    this.description = data.description;
    this.skills = data.skills.map((skill) => new Skill(skill));
  }
}

export class Company {
  logoUrl: string | null;
  name: string;

  constructor(data: Company) {
    this.logoUrl = data.logoUrl;
    this.name = data.name;
  }
}

export class Salary {
  from: number | null;
  to: number | null;
  currency: CurrencyIso4217UpperCase | null;
  employmentType: EmploymentType | null;

  constructor(data: Salary) {
    this.from = data.from;
    this.to = data.to;
    this.currency = data.currency;
    this.employmentType = data.employmentType;
  }
}

export class Location {
  city: string;
  street: string | null;
  coordinates: GeoPosition | null;
  countryCode: CountryCodeIso3166Alpha2UpperCase;

  constructor(data: Location) {
    this.city = data.city;
    this.street = data.street;
    this.coordinates = data.coordinates ? new GeoPosition(data.coordinates) : null;
    this.countryCode = data.countryCode;
  }
}

export class Skill {
  name: string;
  level: Seniority;

  constructor(data: Skill) {
    this.name = data.name;
    this.level = data.level;
  }
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
