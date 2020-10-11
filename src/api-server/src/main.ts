import { NestFactory } from "@nestjs/core";
import { getEnvVariable } from "@src/packages/common/functions";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(Number.parseInt(getEnvVariable("PORT")));
}

bootstrap();
