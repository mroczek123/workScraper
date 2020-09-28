import { url } from '@src/packages/common/types';
import { Scraper } from '@src/packages/scrapers/models';
import Axios, { AxiosResponse } from 'axios';
import { JobOffer } from '@src/packages/offers/models';
import  normalize from './normalizer';
import { JobOfferSimpleResponse } from './data-definitions';

export default class JustJoinItScraper extends Scraper<JobOffer> {
  normalizer = normalize

  async getAllUrls(): Promise<Array<url>> {
    const response: AxiosResponse<Array<JobOfferSimpleResponse>> = await Axios.get('https://justjoin.it/api/offers');
    return response.data.map((jobOffer) => `https://justjoin.it/api/offers/${jobOffer.id}`);
  }
}
