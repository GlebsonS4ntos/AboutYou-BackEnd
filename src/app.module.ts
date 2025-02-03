import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InformationModule } from './information/information.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config(); 

@Module({
  imports: [InformationModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true
    },
  ),
  InformationModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
