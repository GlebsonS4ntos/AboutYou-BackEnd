import { Expose } from "class-transformer";

export class ReadInformationDto {
    @Expose()
    id: string;
    @Expose()
    profession: string
    @Expose()
    name: string;
    @Expose()
    description: string;
    @Expose()
    imageUrl: string;
    @Expose()
    linkedlnUrl: string;
    @Expose()
    githubUrl: string;
    @Expose()
    instagramUrl: string;
    @Expose()
    facebookUrl: string;
    @Expose()
    whatsapp: string;
    @Expose()
    email: string;
}