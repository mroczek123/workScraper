import { JobOfferDetailed, JobOfferSimple } from "../offers/models";

export abstract class Site {
  abstract getOffers(queryParams: Record<string,any>): Promise<Array<JobOfferSimple>>;
  abstract getOfferDetails(id: Array<string | number>): Promise<Array<JobOfferDetailed>>;
}
