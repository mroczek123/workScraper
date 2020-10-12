import { JobOfferSimple } from "../offers/models";

export abstract class Site {
  abstract getOffers(queryParams: Record<string, unknown>): Promise<Array<JobOfferSimple>>;
  // TODO
  //abstract getOfferDetails(id: string | number): Promise<JobOfferDetailed>;
}
