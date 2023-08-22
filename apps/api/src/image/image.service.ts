import { Injectable } from '@nestjs/common';

@Injectable()
export class ImageService {
  getHello(): string {
    return 'Welcome to my API! This API only upload image and return the image url. No database is used.';
  }

  uploadFile(): void {
    return;
  }
}
