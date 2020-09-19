export interface NoFluffJobsSalary {
  from: number;
  to: number;
  type: string;
  currency: string;
}

export interface NoFluffJobsSimplePostingResponse {
  id: string;
  name: string;
  location: {
    places: Array<unknown>;
  };
  posted: number;
  title: string;
  technology: string;
  logo: string;
  category: string;
  seniority: Array<unknown>;
  url: string;
  regions: Array<unknown>;
  salary: NoFluffJobsSalary;
  flavors: Array<unknown>;
  onlineInterviewAvailable: boolean;
}

export interface NoFluffJobsPostingResponse {
  postings: Array<NoFluffJobsSimplePostingResponse>;
  totalCount: number;
}
