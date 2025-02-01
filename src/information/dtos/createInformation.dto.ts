import { IsEmail, IsNotEmpty, IsString, length } from "class-validator";

export class CreateInformationDto {
    @IsString()
    @IsNotEmpty({ message: 'Campo Profissão é Obrigatório.'})
    profession: string
    @IsNotEmpty({ message: 'Campo Nome é Obrigatório.'})
    name: string;
    @IsNotEmpty({ message: 'Campo Descrição é Obrigatório.'})
    description: string;
    @IsString()
    linkedlnUrl: string;
    @IsString()
    githubUrl: string;
    @IsString()
    instagramUrl: string;
    @IsString()
    facebookUrl: string;
    @IsString()
    whatsapp: string;
    @IsNotEmpty({ message: 'O e-mail não pode ser vazio ou nulo.' })
    @IsEmail({}, { message: 'O e-mail informado não é válido.' })
    email: string;
}