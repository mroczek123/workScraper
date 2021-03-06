import Axios, { AxiosResponse } from "axios";
import { JobOfferDetailed, JobOfferSimple } from "../../offers/models";
import { JustJoinItJobOfferSimple } from "./data-definitions/interfaces";
import normalize from "./normalizer";
import { Site } from "../models";

export default class JustJoinItSite extends Site {
  async getOffers(): Promise<Array<JobOfferSimple>> {
    const response: AxiosResponse<Array<JustJoinItJobOfferSimple>> = await Axios.get(
      "https://justjoin.it/api/offers",
    );
    return response.data.map((jobOffer) =>
      normalize(jobOffer, `https://justjoin.it/offers/${jobOffer.id}`),
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
