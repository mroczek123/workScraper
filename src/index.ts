import { Scraper, Collector } from "@models";
import JustJoinItExplorer from "@src/siteScrapers/JustJoinIt/Explorer";
import JustJoinItExtractor from "@src/siteScrapers/JustJoinIt/Extractor";

class ConsoleLogCollector extends Collector {
  collect(data: any): void {
    console.log(data);
  }
}

const jjitScraper = new Scraper({explorer: new JustJoinItExplorer, extractor: new JustJoinItExtractor, collector: new ConsoleLogCollector})

jjitScraper.scrap();