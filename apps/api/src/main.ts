import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('/api');
  app.useStaticAssets(join(__dirname, '../images'));
  app.enableCors({
    allowedHeaders: '*',
    credentials: true,
  });
  await app.listen(port);
}
bootstrap();
