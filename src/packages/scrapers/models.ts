import { JobOffer } from "@src/packages/offers/models";
import { url } from "../common/types";

export abstract class Scraper {
  /**
   * Abstract Scraper class to ensure stabile interface between site scrapers
   */
  static scrap(urls: Array<url>): Promise<Array<JobOffer>> {
    /**
     * Walks through given urls and returns standarized job offers
     * @param urls
     */
    throw Error("Not implemented");
  }
}

