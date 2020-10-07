import { url } from "@src/packages/common/types";
import { JobOfferSimple } from "@src/packages/offers/models";
import { NoFluffJobsJobOfferSimple } from "./data-definitions";

export default function normalizer(jobOffer: NoFluffJobsJobOfferSimple, url: url): JobOfferSimple {
  return {
    title: jobOffer.title,
    url
  }
}