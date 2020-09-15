import { Extractor } from "@src/models/models";
import { JustJoinItJobOfferDetail } from "./models";
import axios from "axios";

export default class JustJoinItExtractor extends Extractor {

  private getJobOfferDetail(url: string): Promise<JustJoinItJobOfferDetail> {
    return new Promise((resolve, reject) => {
      axios.get(url)
        .then((response) => resolve(new JustJoinItJobOfferDetail(response.data)));
    })
  }

  extract(jobDetailUrl: string) {
    return new Promise((resolve, reject) => {
      this.getJobOfferDetail(jobDetailUrl)
        .then((data) => resolve(data))
    })
  }
}
