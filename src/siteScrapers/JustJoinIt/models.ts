enum SkillLevel {
  JUNIOR = 1,
  MID = 2,
  SENIOR = 3,
  EXPERT = 4,
}

enum ExperienceLevel {
  JUNIOR = "junior",
  MID = "mid",
  SENIOR = "senior",
}

enum SalaryCurrency {
  PLN = "pln",
}

enum EmploymentType {
  B2B = "b2b",
}

interface JustJoinItSkill {
  name: string;
  level: SkillLevel;
}

export interface JustJoinItJobOfferSimpleResponse {
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
  salary_from: number;
  salary_to: number;
  salary_currency: SalaryCurrency;
  latitude: string;
  longitude: string;
  employment_type: EmploymentType;
  published_at: string;
  remote_interview: boolean;
  id: string;
  company_logo_url: string;
  skills: Array<JustJoinItSkill>;
}

export class JustJoinItJobOfferSimple {
  id: string;
  title: string;
  street: string;
  city: string;
  countryCode: string;
  addressText: string;
  markerIcon: string;
  remote: boolean;
  companyName: string;
  companyUrl: string;
  companySize: string;
  experienceLevel: ExperienceLevel;
  salaryFrom: number;
  salaryTo: number;
  salaryCurrency: SalaryCurrency;
  latitude: string;
  longitude: string;
  employmentType: EmploymentType;
  publishedAt: Date;
  remoteInterview: boolean;
  companyLogoUrl: string;
  skills: Array<JustJoinItSkill>;

  constructor(data: JustJoinItJobOfferSimpleResponse) {
    this.title = data.title;
    this.street = data.street;
    this.city = data.city;
    this.countryCode = data.country_code;
    this.addressText = data.address_text;
    this.markerIcon = data.marker_icon;
    this.remote = data.remote;
    this.companyName = data.company_name;
    this.companyUrl = data.company_url;
    this.companySize = data.company_size;
    this.experienceLevel = data.experience_level;
    this.salaryFrom = data.salary_from;
    this.salaryTo = data.salary_to;
    this.salaryCurrency = data.salary_currency;
    this.latitude = data.latitude;
    this.longitude = data.longitude;
    this.employmentType = data.employment_type;
    this.publishedAt = new Date(data.published_at);
    this.remoteInterview = data.remote_interview;
    this.id = data.id;
    this.companyLogoUrl = data.company_logo_url;
    this.skills = data.skills;
  }
}

export interface JustJoinItJobOfferDetailResponse
  extends JustJoinItJobOfferSimpleResponse {
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

export class JustJoinItJobOfferDetail extends JustJoinItJobOfferSimple {
  applyBody: unknown;
  applyUrl: string;
  body: string;
  customConsent: unknown;
  customConsentTitle: string;
  futureConsent: string;
  futureConsentTitle: string;
  informationClause: string;
  tags: Array<unknown>;

  constructor(data: JustJoinItJobOfferDetailResponse) {
    super(data);
    this.applyBody = data.apply_body;
    this.applyUrl = data.apply_url;
    this.body = data.body;
    this.customConsent = data.custom_consent;
    this.customConsentTitle = data.custom_consent_title;
    this.futureConsent = data.future_consent;
    this.futureConsentTitle = data.future_consent_title;
    this.informationClause = data.information_clause;
    this.tags = data.tags;
  }
}
