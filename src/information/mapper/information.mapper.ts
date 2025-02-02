import { plainToInstance } from "class-transformer";
import { ReadInformationDto } from "../dtos/readInformation.dto";
import { Information } from "../entities/information.entity";
import { CreateInformationDto } from "../dtos/createInformation.dto";

export class InformationMapper {
    informationToReadInformationDto(information: Information): ReadInformationDto {
        return plainToInstance(ReadInformationDto, information, { excludeExtraneousValues: true });
    }

    createInformationDtoToInformation(createInformationDto: CreateInformationDto, imageurl: string): Information {
        console.log(createInformationDto);
        const info = plainToInstance(Information, { ...createInformationDto, imageUrl: imageurl});
        console.log(info);
        return info;
    }
}