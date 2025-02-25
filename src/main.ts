import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [process.env.FRONT_URL],
    methods: ['GET', 'POST'],
    credentials: true,
    allowedHeaders: ['Content-Type']
  });
  await app.listen(4000);
}
bootstrap();
