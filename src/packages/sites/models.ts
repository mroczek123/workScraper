import { JobOfferSimple } from "../offers/models";

export abstract class Site {
  abstract getOffers(queryParams: Record<string, unknown>): Promise<Array<JobOfferSimple>>;
}
