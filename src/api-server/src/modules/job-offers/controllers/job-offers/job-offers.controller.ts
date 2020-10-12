import { Controller, Get } from "@nestjs/common";
import { JobOfferSimple } from "@src/packages/offers/models";
import { JobOffersService } from "../../services/job-offers/job-offers.service";

@Controller("api/job-offers")
export class JobOffersController {
  constructor(private jobOffersService: JobOffersService) {}

  @Get()
  getJobOffers(): Promise<Array<JobOfferSimple>> {
    return this.jobOffersService.getAllOffers();
  }
}
