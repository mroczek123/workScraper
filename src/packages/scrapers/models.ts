import { JobOffer } from "@src/backend/scraping/offers/models";
import { url } from "../common/types";

export abstract class Scraper {
  abstract scrap(urls: Array<url>): Promise<Array<JobOffer>>;
}

