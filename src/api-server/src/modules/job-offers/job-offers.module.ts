import { Module } from "@nestjs/common";
import { JobOffersController } from "./controllers/job-offers/job-offers.controller";
import { JobOffersService } from "./services/job-offers/job-offers.service";

@Module({
  providers: [JobOffersService],
  controllers: [JobOffersController],
})
export class JobOffersModule {}
