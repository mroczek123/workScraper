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
  referralBonusCurrency?: ReferralBonusCurrencyChoices;
  applied?: string;
}

enum CountryCodeChoices {
  POL = "POL",
  GBR = "GBR",
  FRA = "FRA",
  CAN = "CAN",
  AUT = "AUT",
  DEU = "DEU",
  HUN = "HUN",
  CZE = "CZE",
  SVK = "SVK",
}

enum NameChoices {
  POLAND = "Poland",
  UNITED_KINGDOM = "United Kingdom",
  FRANCE = "France",
  CANADA = "Canada",
  AUSTRIA = "Austria",
  GERMANY = "Germany",
  HUNGARY = "Hungary",
  CZECH_REPUBLIC = "Czech Republic",
  SLOVAKIA = "Slovakia",
}

interface Country {
  code: CountryCodeChoices;
  name: NameChoices;
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

enum CategoryChoices {
  FULLSTACK = "fullstack",
  BACKEND = "backend",
  FRONTEND = "frontend",
  TESTING = "testing",
  ITADMINISTRATOR = "itAdministrator",
  DEVOPS = "devops",
  MOBILE = "mobile",
  BUSINESSANALYST = "businessAnalyst",
  BIGDATA = "bigData",
  OTHER = "other",
  PROJECTMANAGER = "projectManager",
  BUSINESSINTELLIGENCE = "businessIntelligence",
  PRODUCTMANAGEMENT = "productManagement",
  SECURITY = "security",
  ARTIFICIALINTELLIGENCE = "artificialIntelligence",
  UX = "ux",
  SUPPORT = "support",
  MARKETING = "marketing",
  SALES = "sales",
  AGILE = "agile",
  GAMING = "gaming",
  EMBEDDED = "embedded",
  HR = "hr",
}

enum SeniorityChoices {
  MID = "Mid",
  SENIOR = "Senior",
  EXPERT = "Expert",
  JUNIOR = "Junior",
  TRAINEE = "Trainee",
}

enum RegionsChoices {
  PL = "pl",
  HU = "hu",
  CZ = "cz",
}

enum TypeChoices {
  B2B = "b2b",
  UOD = "uod",
  PERMANENT = "permanent",
  ZLECENIE = "zlecenie",
}

enum CurrencyChoices {
  PLN = "PLN",
  USD = "USD",
  EUR = "EUR",
  HUF = "HUF",
  CZK = "CZK",
}

interface Salary {
  from: number;
  to: number;
  type: TypeChoices;
  currency: CurrencyChoices;
}

enum FlavorsChoices {
  IT = "it",
  BUSINESS = "business",
}

enum ReferralBonusCurrencyChoices {
  PLN = "PLN",
  EUR = "EUR",
  USD = "USD",
  HUF = "HUF",
}
