import { url } from '@src/packages/common/types';
import Axios, { AxiosResponse } from 'axios';
import { JobOfferDetailed } from '@src/packages/offers/models';
import  normalize from './normalizer';
import {Scraper} from "scraper";
import { JobOfferSimpleResponse } from './data-definitions';

export default class JustJoinItScraper extends Scraper<JobOfferDetailed> {
  normalizer = normalize

  async getAllUrls(): Promise<Array<url>> {
    const response: AxiosResponse<Array<JobOfferSimpleResponse>> = await Axios.get('https://justjoin.it/api/offers');
    return response.data.map((jobOffer) => `https://justjoin.it/api/offers/${jobOffer.id}`);
  }
}
