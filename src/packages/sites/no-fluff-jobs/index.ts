import Axios, { AxiosResponse } from "axios";
import { JobOfferDetailed, JobOfferSimple } from "../../offers/models";
import normalize from "./normalizer";
import { Site } from "../models";
import { NoFluffJobsListResponse } from "./data-definitions/interfaces";

export default class NoFluffJobsSite extends Site {
  async getOffers(): Promise<Array<JobOfferSimple>> {
    const response: AxiosResponse<NoFluffJobsListResponse> = await Axios.get(
      "https://nofluffjobs.com/api/posting",
    );
    return response.data.postings.map((jobOffer) =>
      normalize(jobOffer, `https://nofluffjobs.com/${jobOffer.id}`),
    );
  }
  // TODO
  async getOfferDetails(id: string | number): Promise<JobOfferDetailed> {
    const responseData = (await Axios.get(`https://nofluffjobs.com/api/posting/${id}`)).data;
    return normalize(responseData);
  }
}
