import { Body, Controller, Get, Inject, Param, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { ReadInformationDto } from "./dtos/readInformation.dto";
import { IInformationService } from "./interfaces/information.service.interface";
import { CreateInformationDto } from "./dtos/createInformation.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { CloudinaryService } from "src/utils/cloudinary.service";

@Controller('information')
export class InformationController {
    constructor( 
        @Inject('IInformationService') 
        private readonly informationService: IInformationService,
        private readonly cloudinaryService: CloudinaryService
    ) {}

    @Get(':id')
    async getInformationById(@Param('id') id: string) : Promise<ReadInformationDto> {
        return await this.informationService.getInformationById(id);
    }

    @Post()
    @UseInterceptors(FileInterceptor('image'))
    async createInformation(@Body() createInformationDto: CreateInformationDto, @UploadedFile() image: Express.Multer.File): Promise<ReadInformationDto> {
        const imageurl = await this.cloudinaryService.uploadImage(image);
        return await this.informationService.createInformation(createInformationDto, imageurl);
    }
}