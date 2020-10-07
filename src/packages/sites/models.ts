import { JobOfferDetailed, JobOfferSimple } from "../offers/models";

export abstract class Endpoint {
  abstract getResponse(data: any): Promise<any>;
}

export abstract class Site {
  abstract getOffers(data: any): Promise<Array<JobOfferSimple>>;
  abstract getOfferDetails(data: any): Promise<Array<JobOfferDetailed>>;
}
