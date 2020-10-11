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
  getOfferDetails(ids: Array<string | number>): Promise<Array<JobOfferDetailed>> {
    return new Promise((resolve, reject) => {
      const output: Array<JobOfferDetailed> = [];
      resolve(output);
    });
  }
}
