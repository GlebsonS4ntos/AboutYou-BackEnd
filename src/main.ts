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
  const PORT = process.env.PORT || 4000;
  await app.listen(PORT, '0.0.0.0');
}
bootstrap();
