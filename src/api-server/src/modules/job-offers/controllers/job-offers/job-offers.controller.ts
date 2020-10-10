import { Controller, Get, Req } from "@nestjs/common";
import { JobOfferSimple } from "@src/packages/offers/models";
import { JobOffersService } from "../../services/job-offers/job-offers.service";
import { Request } from "express";

@Controller("api/job-offers")
export class JobOffersController {
  constructor(private jobOffersService: JobOffersService) {}

  @Get()
  getJobOffers(@Req() request: Request): Promise<Array<JobOfferSimple>> {
    return this.jobOffersService.getAllOffers();
  }
}
