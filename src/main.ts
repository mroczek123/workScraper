import { Scraper, Collector } from "@src/models/models";
import JustJoinItExplorer from "@src/siteScrapers/justJoinIt/Explorer";
import JustJoinItExtractor from "@src/siteScrapers/justJoinIt/Extractor";

class ConsoleLogCollector extends Collector {
  collect(data: any): void {
    console.log(data);
  }
}

const jjitScraper = new Scraper({explorer: new JustJoinItExplorer, extractor: new JustJoinItExtractor, collector: new ConsoleLogCollector})

jjitScraper.scrap();