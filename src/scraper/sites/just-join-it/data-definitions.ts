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
  AED = "aed",
  AFN = "afn",
  ALL = "all",
  AMD = "amd",
  ANG = "ang",
  AOA = "aoa",
  ARS = "ars",
  AUD = "aud",
  AWG = "awg",
  AZN = "azn",
  BAM = "bam",
  BBD = "bbd",
  BDT = "bdt",
  BGN = "bgn",
  BHD = "bhd",
  BIF = "bif",
  BMD = "bmd",
  BND = "bnd",
  BOB = "bob",
  BRL = "brl",
  BSD = "bsd",
  BTC = "btc",
  BTN = "btn",
  BWP = "bwp",
  BYN = "byn",
  BZD = "bzd",
  CAD = "cad",
  CDF = "cdf",
  CHF = "chf",
  CLF = "clf",
  CLP = "clp",
  CNH = "cnh",
  CNY = "cny",
  COP = "cop",
  CRC = "crc",
  CUC = "cuc",
  CUP = "cup",
  CVE = "cve",
  CZK = "czk",
  DJF = "djf",
  DKK = "dkk",
  DOP = "dop",
  DZD = "dzd",
  EGP = "egp",
  ERN = "ern",
  ETB = "etb",
  EUR = "eur",
  FJD = "fjd",
  FKP = "fkp",
  GBP = "gbp",
  GEL = "gel",
  GGP = "ggp",
  GHS = "ghs",
  GIP = "gip",
  GMD = "gmd",
  GNF = "gnf",
  GTQ = "gtq",
  GYD = "gyd",
  HKD = "hkd",
  HNL = "hnl",
  HRK = "hrk",
  HTG = "htg",
  HUF = "huf",
  IDR = "idr",
  ILS = "ils",
  IMP = "imp",
  INR = "inr",
  IQD = "iqd",
  IRR = "irr",
  ISK = "isk",
  JEP = "jep",
  JMD = "jmd",
  JOD = "jod",
  JPY = "jpy",
  KES = "kes",
  KGS = "kgs",
  KHR = "khr",
  KMF = "kmf",
  KPW = "kpw",
  KRW = "krw",
  KWD = "kwd",
  KYD = "kyd",
  KZT = "kzt",
  LAK = "lak",
  LBP = "lbp",
  LKR = "lkr",
  LRD = "lrd",
  LSL = "lsl",
  LYD = "lyd",
  MAD = "mad",
  MDL = "mdl",
  MGA = "mga",
  MKD = "mkd",
  MMK = "mmk",
  MNT = "mnt",
  MOP = "mop",
  MRO = "mro",
  MRU = "mru",
  MUR = "mur",
  MVR = "mvr",
  MWK = "mwk",
  MXN = "mxn",
  MYR = "myr",
  MZN = "mzn",
  NAD = "nad",
  NGN = "ngn",
  NIO = "nio",
  NOK = "nok",
  NPR = "npr",
  NZD = "nzd",
  OMR = "omr",
  PAB = "pab",
  PEN = "pen",
  PGK = "pgk",
  PHP = "php",
  PKR = "pkr",
  PLN = "pln",
  PYG = "pyg",
  QAR = "qar",
  RON = "ron",
  RSD = "rsd",
  RUB = "rub",
  RWF = "rwf",
  SAR = "sar",
  SBD = "sbd",
  SCR = "scr",
  SDG = "sdg",
  SEK = "sek",
  SGD = "sgd",
  SHP = "shp",
  SLL = "sll",
  SOS = "sos",
  SRD = "srd",
  SSP = "ssp",
  STD = "std",
  STN = "stn",
  SVC = "svc",
  SYP = "syp",
  SZL = "szl",
  THB = "thb",
  TJS = "tjs",
  TMT = "tmt",
  TND = "tnd",
  TOP = "top",
  TRY = "try",
  TTD = "ttd",
  TWD = "twd",
  TZS = "tzs",
  UAH = "uah",
  UGX = "ugx",
  USD = "usd",
  UYU = "uyu",
  UZS = "uzs",
  VEF = "vef",
  VND = "vnd",
  VUV = "vuv",
  WST = "wst",
  XAF = "xaf",
  XAG = "xag",
  XAU = "xau",
  XCD = "xcd",
  XDR = "xdr",
  XOF = "xof",
  XPD = "xpd",
  XPF = "xpf",
  XPT = "xpt",
  YER = "yer",
  ZAR = "zar",
  ZMW = "zmw",
  ZWL = "zwl",
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
  salary_from?: number;
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
