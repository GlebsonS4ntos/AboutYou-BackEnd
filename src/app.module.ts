import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InformationModule } from './information/information.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [InformationModule, TypeOrmModule.forRoot(
    {
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'example',
      password: 'example',
      database: 'aboutyou',
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
