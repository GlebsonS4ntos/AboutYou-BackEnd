import { CreateInformationDto } from "../dtos/createInformation.dto";
import { ReadInformationDto } from "../dtos/readInformation.dto";

export interface IInformationService {
    createInformation(createInformationDto: CreateInformationDto, imageurl: string): Promise<ReadInformationDto>;
    getInformationById(id: string): Promise<ReadInformationDto>;
}