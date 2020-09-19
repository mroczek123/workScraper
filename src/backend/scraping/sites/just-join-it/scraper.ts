import { url } from "@src/packages/common/types";
import { Scraper } from "@src/packages/scrapers/models";
import Axios, { AxiosResponse } from "axios";
import { JobOffer } from "../../offers/models";
import { normalize } from "./normalizer";
import { JobOfferDetailResponse } from "./data-definitions";

export default class JustJoinItScraper extends Scraper {
  scrap(urls: Array<url>): Promise<Array<JobOffer>> {
    return new Promise((resolve, reject) => {
      const jobOffersPromises = urls.map((url) => {
        return Axios.get(url)
          .then((response: AxiosResponse<JobOfferDetailResponse>) => normalize(response.data, url));
      })
      Promise.all(jobOffersPromises).then(normalizedJobOffers => resolve(normalizedJobOffers));
    });
  }
}
