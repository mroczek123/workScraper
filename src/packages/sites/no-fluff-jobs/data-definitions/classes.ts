import {
  SeniorityChoices,
  RegionsChoices,
  FlavorsChoices,
  TypeChoices,
  CategoryChoices,
} from "./enums";

export class NoFluffJobsListResponse {
  postings: Array<NoFluffJobsJobOfferSimple>;
  totalCount: number;

  constructor(data: NoFluffJobsListResponse) {
    this.postings = data.postings.map((posting) => new NoFluffJobsJobOfferSimple(posting));
    this.totalCount = data.totalCount;
  }
}

export class NoFluffJobsJobOfferSimple {
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
  referralBonusCurrency?: string; // Iso4217UpperCase
  applied?: string;

  constructor(data: NoFluffJobsJobOfferSimple) {
    this.id = data.id;
    this.name = data.name;
    this.location = data.location;
    this.posted = data.posted;
    this.title = data.title;
    this.technology = data.technology;
    this.logo = data.logo;
    this.category = data.category;
    this.seniority = data.seniority;
    this.url = data.url;
    this.regions = data.regions;
    this.salary = data.salary;
    this.flavors = data.flavors;
    this.onlineInterviewAvailable = data.onlineInterviewAvailable;
    this.renewed = data.renewed;
    this.referralBonus = data.referralBonus;
    this.referralBonusCurrency = data.referralBonusCurrency;
    this.applied = data.applied;
  }
}

export class Country {
  code: string; // Iso3166Alpha3UpperCase
  name: string; // Capital cased country name

  constructor(data: Country) {
    this.code = data.code;
    this.name = data.name;
  }
}

export class GeoLocation {
  latitude: number;
  longitude: number;

  constructor(data: GeoLocation) {
    this.latitude = data.latitude;
    this.longitude = data.longitude;
  }
}

export class Place {
  country?: Country;
  city: string;
  street?: string;
  postalCode?: string;
  geoLocation?: GeoLocation;
  url: string;

  constructor(data: {
    country?: Country;
    city: string;
    street?: string;
    postalCode?: string;
    geoLocation?: GeoLocation;
    url: string;
  }) {
    this.country = data.country ? new Country(data.country) : undefined;
    this.city = data.city;
    this.street = data.street;
    this.postalCode = data.postalCode;
    this.geoLocation = data.geoLocation ? new GeoLocation(data.geoLocation) : undefined;
    this.url = data.url;
  }
}

export class Location {
  places: Array<Place>;
  fullyRemote: boolean;

  constructor(data: Location) {
    this.places = data.places.map((place) => new Place(place));
    this.fullyRemote = data.fullyRemote;
  }
}

export class Salary {
  from: number;
  to: number;
  type: TypeChoices;
  currency: string; // Iso4217UpperCase

  constructor(data: Salary) {
    this.from = data.from;
    this.to = data.to;
    this.type = data.type;
    this.currency = data.currency;
  }
}
