import { url } from "@src/packages/common/types";
import { JobOffer } from "@src/packages/offers/models";
import { Scraper } from "@src/packages/scrapers/models";
import Axios, { AxiosResponse } from "axios";
import { PostingResponse } from "./data-definitions";
import normalize from "./normalizer";

export default class NoFluffJobsScraper extends Scraper<JobOffer> {
  normalizer = normalize

  async getAllUrls(): Promise<Array<url>> {
    const response:AxiosResponse<PostingResponse> = await Axios.get("https://nofluffjobs.com/api/posting")
    return response.data.postings.map((jobOffer) => `https://nofluffjobs.com/api/posting/${jobOffer.id}`)
  }
}