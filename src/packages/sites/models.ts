import { url } from "@src/common/types";

export abstract class Endpoint {
  abstract url: url;
  abstract getResponse(data: any): Promise<any>;
}

export abstract class Site {
  abstract url: url;
  abstract getAllOffers(data: any): Promise<any>;
  abstract getOfferDetails(data: any): Promise<any>;
}
