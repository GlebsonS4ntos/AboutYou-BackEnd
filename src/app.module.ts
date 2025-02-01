import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InformationModule } from './information/information.module';
import { CloudinaryService } from './utils/cloudinary.service';

@Module({
  imports: [InformationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
