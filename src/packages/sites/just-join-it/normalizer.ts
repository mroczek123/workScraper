import { url } from "@src/packages/common/types";
import { JobOfferSimple } from "@src/packages/offers/models";
import { JustJoinItJobOfferSimple } from "./data-definitions";

export default function normalize(input: JustJoinItJobOfferSimple, url: url): JobOfferSimple {
  return {
    url,
    title: input.title
  }
}