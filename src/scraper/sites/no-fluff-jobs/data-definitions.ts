import { url } from "@src/packages/common/types";
import { Currency } from "@src/packages/currencies/models";

export interface Salary {
  from: number;
  to: number;
  type: string;
  currency: string;
}

export interface PostingSimple {
  id: string;
  name: string;
  location: {
    places: Array<unknown>;
    fullyRemonte: boolean;
  };
  posted: number;
  title: string;
  technology: string;
  logo: string;
  category: string;
  seniority: Array<unknown>;
  url: string;
  regions: Array<unknown>;
  salary: Salary;
  flavors: Array<unknown>;
  onlineInterviewAvailable: boolean;
}

export interface PostingDetail {
  id: string;
  apply: {
    onlineInterviewAvailable: boolean;
  };
  specs: {
    details: {
      custom: Array<unknown>;
    };
    dailyTasks: Array<string>;
    travelling: "none" | unknown; // TODO,
    workProfile: {
      type: "mainlyFeatures" | unknown; // TODO
    };
    referral: {
      allowed: boolean;
    };
  };
  title: string;
  basics: {
    category: "backend" | unknown; // TODO
    seniority: Array<"Senior" | unknown>;
    technology: "java" | unknown;
  },
  company: {
    logo: url, // relative to root of nfj
    name: string,
    size: string,
    consentsInfo: {
      marketingInfo: boolean,
      termsAndConditions: boolean
    },
    additionalContactEmails: Array<unknown>;
  },
  details: {
    quote: string,
    description: string,
    quoteAuthor: string
  },
  preview: string,
  benefits: {
    benefits: Array<unknown>,
    equipment: {
      computer: "Notebook" | unknown, //TODO
      monitors: "If needed" | unknown,
      operatingSystems: {
        lin: boolean,
        mac: boolean,
        win: boolean
      }
    },
    officePerks: Array<unknown>;
  },
  consents: {
    infoClause: string
  },
  location: {
    places: Array<unknown>, //TODO
    remote: number, // TODO WTF
    multicityCount: number // TODO WTF
  },
  essentials: {
    salary: {
      types: unknown, // TODO
      currency: Currency
    }
  }
}

export interface PostingResponse {
  postings: Array<PostingSimple>;
  totalCount: number;
}
