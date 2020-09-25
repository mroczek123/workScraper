import JustJoinItScraper from "@src/scraper/sites/just-join-it/scraper";
import { url } from "@src/packages/common/types";
import Collector from "./collector";

class Orchestrator {
  
  public static updateJobOffers() {
    /**
     * Create job Scrapers, pass data from job scrapers to collectors and so on
     */
    const collectors = [new Collector()];
    JustJoinItScraper.scrap([]).then();
  }

  private makeScrapers(urls: Array<url>) {
    return [JustJoinItScraper.scrap([])]
  }
}