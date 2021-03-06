import Axios, { AxiosResponse } from "axios";
import { JobOfferDetailed, JobOfferSimple } from "../../offers/models";
import normalize from "./normalizer";
import { Site } from "../models";
import { JobsForGeekJobOfferSimple } from "./data-definitions/interfaces";

export default class JobsForGeekSite extends Site {
  async getOffers(): Promise<Array<JobOfferSimple>> {
    const response: AxiosResponse<Array<JobsForGeekJobOfferSimple>> = await Axios.get(
      "https://jobsforgeek.com/api/public/job-offer",
    );
    return response.data.map((jobOffer) =>
      normalize(jobOffer, `https://jobsforgeek.com/job-offers/details/${jobOffer.id}`),
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
