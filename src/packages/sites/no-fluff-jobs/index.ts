import Axios, { AxiosResponse } from "axios";
import { JobOfferSimple } from "../../offers/models";
import normalize from "./normalizer";
import { Site } from "../models";
import { NoFluffJobsListResponse } from "./data-definitions";

export default class NoFluffJobsSite extends Site {
  async getOffers(): Promise<Array<JobOfferSimple>> {
    const response: AxiosResponse<NoFluffJobsListResponse> = await Axios.get("https://nofluffjobs.com/api/posting");
    return response.data.postings.map((jobOffer) => normalize(jobOffer, `https://nofluffjobs.com/${jobOffer.id}`))
  }
}