import {
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  Post,
  Res,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { ImageService } from './image.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { Response } from 'express';

@Controller('image')
export class ImageController {
  constructor(
    private imageService: ImageService,
    private readonly cloudinaryService: CloudinaryService,
  ) {}

  @Get()
  getHello() {
    return this.imageService.getHello();
  }

  @Get(':imageName')
  getImage(@Param('imageName') imageName: string, @Res() res: Response) {
    res.sendFile(join(__dirname, '../../', 'images', imageName));
  }

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: 1024 * 1024 * 5,
            message: 'File size exceeds 5MB',
          }),
          new FileTypeValidator({
            fileType: 'image/*',
          }),
        ],
        fileIsRequired: true,
        errorHttpStatusCode: 400,
      }),
    )
    file: Express.Multer.File,
  ) {
    try {
      const submitImage = await this.cloudinaryService.uploadFile(file);
      return {
        url: submitImage.url,
      };
    } catch (error) {
      console.error(error);
      throw new Error("Couldn't upload image");
    }
  }
}
