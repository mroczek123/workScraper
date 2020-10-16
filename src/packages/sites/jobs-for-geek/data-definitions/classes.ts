import {
  B2bFrequencyChoices,
  CategoryChoices,
  EmploymentFrequencyChoices,
  RemoteTypeChoices,
} from "./enums";

export class JobsForGeekJobOfferSimple {
  id: number;
  featured: boolean;
  logoId?: number;
  jobTitle: string;
  companyName: string;
  city?: string; // e.g. NEW_YORK
  country: string; // e.g. NEW_RUSSIA
  websiteAddress: string;
  skills?: Array<string>;
  b2bSalaryFrom?: number;
  b2bSalaryTo?: number;
  employmentSalaryFrom?: number;
  employmentSalaryTo?: number;
  remoteType: RemoteTypeChoices;
  category: CategoryChoices;
  lastBumpTime: string;
  publishedTime: string;
  b2bFrequency?: B2bFrequencyChoices;
  lat?: number;
  lng?: number;
  experience: number; // in months
  onlineInterview?: boolean;
  videoLink?: string;
  employmentFrequency?: EmploymentFrequencyChoices;

  constructor(data: {
    id: number;
    featured: boolean;
    logoId?: number;
    jobTitle: string;
    companyName: string;
    city?: string;
    country: string;
    websiteAddress: string;
    skills?: Array<string>;
    b2bSalaryFrom?: number;
    b2bSalaryTo?: number;
    employmentSalaryFrom?: number;
    employmentSalaryTo?: number;
    remoteType: RemoteTypeChoices;
    category: CategoryChoices;
    lastBumpTime: string;
    publishedTime: string;
    b2bFrequency?: B2bFrequencyChoices;
    lat?: number;
    lng?: number;
    experience: number; // in months
    onlineInterview?: boolean;
    videoLink?: string;
    employmentFrequency?: EmploymentFrequencyChoices;
  }) {
    this.id = data.id;
    this.featured = data.featured;
    this.logoId = data.logoId;
    this.jobTitle = data.jobTitle;
    this.companyName = data.companyName;
    this.city = data.city;
    this.country = data.country;
    this.websiteAddress = data.websiteAddress;
    this.skills = data.skills;
    this.b2bSalaryFrom = data.b2bSalaryFrom;
    this.b2bSalaryTo = data.b2bSalaryTo;
    this.employmentSalaryFrom = data.employmentSalaryFrom;
    this.employmentSalaryTo = data.employmentSalaryTo;
    this.remoteType = data.remoteType;
    this.category = data.category;
    this.lastBumpTime = data.lastBumpTime;
    this.publishedTime = data.publishedTime;
    this.b2bFrequency = data.b2bFrequency;
    this.lat = data.lat;
    this.lng = data.lng;
    this.experience = data.experience;
    this.onlineInterview = data.onlineInterview;
    this.videoLink = data.videoLink;
    this.employmentFrequency = data.employmentFrequency;
  }
}
