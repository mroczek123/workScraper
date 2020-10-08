import { CountryCodeIso3166Alpha3 } from "@src/packages/localization/country-codes";
import { CurrencyIso4217UpperCase } from "@src/packages/localization/currencies";
import {
  SeniorityChoices,
  RegionsChoices,
  FlavorsChoices,
  CountryNameCapitalCase,
  TypeChoices,
  CategoryChoices
} from "./enums";

export interface NoFluffJobsListResponse {
  postings: Array<NoFluffJobsJobOfferSimple>;
  totalCount: number;
}

export interface NoFluffJobsJobOfferSimple {
  id: string;
  name: string;
  location: Location;
  posted: number;
  title: string;
  technology?: string;
  logo: string;
  category: CategoryChoices;
  seniority: Array<SeniorityChoices>;
  url: string;
  regions: Array<RegionsChoices>;
  salary: Salary;
  flavors: Array<FlavorsChoices>;
  onlineInterviewAvailable: boolean;
  renewed?: number;
  referralBonus?: number;
  referralBonusCurrency?: CurrencyIso4217UpperCase;
  applied?: string;
}

interface Country {
  code: CountryCodeIso3166Alpha3;
  name: CountryNameCapitalCase;
}

interface GeoLocation {
  latitude: number;
  longitude: number;
}

interface Places {
  country?: Country;
  city: string;
  street?: string;
  postalCode?: string;
  geoLocation?: GeoLocation;
  url: string;
}

interface Location {
  places: Array<Places>;
  fullyRemote: boolean;
}

interface Salary {
  from: number;
  to: number;
  type: TypeChoices;
  currency: CurrencyIso4217UpperCase;
}
