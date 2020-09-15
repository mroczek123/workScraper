export abstract class Collector {
  abstract collect(data: any): unknown;
}

export abstract class Explorer {
  abstract getUrls(): Promise<Array<string>>;
}

export abstract class Extractor {
  abstract extract(url: string): Promise<any>;
}

export class Scraper {
  private explorer: Explorer;
  private extractor: Extractor;
  private collector: Collector;

  constructor(data: {
    explorer: Explorer;
    extractor: Extractor;
    collector: Collector;
  }) {
    this.explorer = data.explorer;
    this.extractor = data.extractor;
    this.collector = data.collector;
  }

  async scrap() {
    let urls = await this.explorer.getUrls();
    urls.forEach((url) => {
      this.extractor
        .extract(url)
        .then((normalizedData) => this.collector.collect(normalizedData));
    });
  }
}
