import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateInformationDto } from './dtos/createInformation.dto';
import { ReadInformationDto } from './dtos/readInformation.dto';
import { Information } from './entities/information.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Not, Repository } from 'typeorm';
import { InformationMapper } from './mapper/information.mapper';
import { IInformationService } from './interfaces/information.service.interface';

@Injectable()
export class InformationService implements IInformationService {

    constructor(
        @InjectRepository(Information) private readonly informationRepository: Repository<Information>,
        private readonly informationMapper: InformationMapper
    ) {}

    async createInformation(createInformationDto: CreateInformationDto, imageurl: string): Promise<ReadInformationDto> {
        const infoEntity = this.informationMapper.createInformationDtoToInformation(createInformationDto, imageurl);
        const infoAdded = await this.informationRepository.save(infoEntity);

        return this.informationMapper.informationToReadInformationDto(infoAdded);
    }
    async getInformationById(id: string): Promise<ReadInformationDto> {
        const info = await this.informationRepository.findOne({ where: { id : id } });

        if (!info) {
            throw new NotFoundException('Não encontrado')
        }
        
        return this.informationMapper.informationToReadInformationDto(info);
    }
}
