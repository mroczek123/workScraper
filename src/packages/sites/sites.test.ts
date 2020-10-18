import { JobOfferSimple } from "@src/packages/offers/models";
import sites from ".";

describe("sites", () => {
  test("getOffers executes without error and return expected Type Array<JobOffer>", () => {
    sites.forEach(async (site) => {
      const jobOffers = await site.getOffers();
      expect(Array.isArray(jobOffers)).toEqual(true);
      jobOffers.forEach((jobOffer) => expect(jobOffer).toBeInstanceOf(JobOfferSimple));
    });
    return;
  });
});
