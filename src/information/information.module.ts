import { Module } from '@nestjs/common';
import { InformationService } from './information.service';
import { InformationMapper } from './mapper/information.mapper';import { InformationController } from './information.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Information } from './entities/information.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Information])],
  controllers: [InformationController],
  providers: [{
    provide: 'IInformationService',    
    useClass: InformationService
  }, InformationMapper]
})
export class InformationModule {}
