import { plainToInstance } from "class-transformer";
import { ReadInformationDto } from "../dtos/readInformation.dto";
import { Information } from "../entities/information.entity";
import { CreateInformationDto } from "../dtos/createInformation.dto";

export class InformationMapper {
    informationToReadInformationDto(information: Information): ReadInformationDto {
        return plainToInstance(ReadInformationDto, information, { excludeExtraneousValues: true });
    }

    createInformationDtoToInformation(createInformationDto: CreateInformationDto, imageurl: string): Information {
        return plainToInstance(Information, { ...createInformationDto, imageUrl: imageurl}, { excludeExtraneousValues: true });
    }
}