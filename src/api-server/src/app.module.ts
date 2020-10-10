import { Module } from "@nestjs/common";
import { JobOffersModule } from "./modules/job-offers/job-offers.module";

@Module({
  providers: [],
  imports: [JobOffersModule],
  exports: [],
})
export class AppModule {}
