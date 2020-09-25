import { url } from "@src/packages/common/types";
import { Scraper } from "@src/packages/scrapers/models";
import Axios, { AxiosResponse } from "axios";
import { JobOffer } from "../../../../packages/offers/models";
import { normalize } from "./normalizer";
import { JobOfferDetailResponse } from "./data-definitions";

export default class JustJoinItScraper extends Scraper {
  public static scrap(urls: Array<url>): Promise<Array<JobOffer>> {
    return new Promise((resolve, reject) => {
      const jobOffersPromises = urls.map((url) => getNormalizedJobOffer(url));
      Promise.all(jobOffersPromises).then(normalizedJobOffers => resolve(normalizedJobOffers));
    });

    function getNormalizedJobOffer(url: url): Promise<JobOffer> {
      return new Promise((resolve, reject) => {
        Axios.get(url).then((response: AxiosResponse<JobOfferDetailResponse>) => normalize(response.data, url))
      })
    }
  }
}
