import { Injectable } from "@nestjs/common";
import { JobOfferSimple } from "@src/packages/offers/models";
import sites from "@src/packages/sites";

@Injectable()
export class JobOffersService {
  public async getAllOffers(): Promise<JobOfferSimple[]> {
    const jobOffersPromises = sites.map((site) => site.getOffers());
    const offersArray = await Promise.all(jobOffersPromises);
    return offersArray.flat(1);
  }
}
