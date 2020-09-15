import { Explorer } from "@src/models/models";
import { JustJoinItJobOfferSimple, JustJoinItJobOfferSimpleResponse } from "./models";
import axios from 'axios';


export default class JustJoinItExplorer extends Explorer {

  private getAllJobOffers(): Promise<Array<JustJoinItJobOfferSimple>> {
    return new Promise((resolve, reject) => {
      const rootUrl = 'https://justjoin.it/api/offers';
      axios.get(rootUrl)
        .then((response) => response.data.map((jobOfferSimple: JustJoinItJobOfferSimpleResponse) => new JustJoinItJobOfferSimple(jobOfferSimple)))
        .then((data) => resolve(data));
    })
  }

  private getOfferDetailUrl(simpleOffer: JustJoinItJobOfferSimple): string {
    return `https://justjoin.it/api/offers/${simpleOffer.id}`
  }

  getUrls(): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
      this.getAllJobOffers()
        .then((data) => data.map((jobOfferSimple) => this.getOfferDetailUrl(jobOfferSimple)))
        .then((data) => resolve(data));
    })
  }
}