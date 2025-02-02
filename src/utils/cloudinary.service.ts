import { BadRequestException, Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class CloudinaryService {
    async uploadImage(image: Express.Multer.File): Promise<string> {
        this.validationImage(image);

        try {
            cloudinary.config({ 
                cloud_name: process.env.CLOUDINARY_NAME, 
                api_key: process.env.CLOUDINARY_API, 
                api_secret: process.env.CLOUDINARY_KEY
            });
    
            const base64Image = `data:${image.mimetype};base64,${image.buffer.toString('base64')}`;
            const uploadResult = await cloudinary.uploader
                .upload(base64Image, {
                    use_filename: true,
                    unique_filename: true,
                });

            return uploadResult.url;
        } catch (error) {
            console.log(error);
            throw new BadRequestException("Falha ao fazer upload da imagem.");
        }
    }

    validationImage(image: Express.Multer.File) {
        if (!image) {
            throw new BadRequestException('Nenhuma imagem foi enviada');
        }

        const imageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
        
        if (!imageTypes.includes(image.mimetype)) {
            throw new BadRequestException('Formato inválido, a imagem deve ser JPG, JPEG ou PNG');
        }

        if (image.size > 5000000) {
            throw new BadRequestException('O tamanho da imagem deve ser até 5MB.');
        }
    }
}
