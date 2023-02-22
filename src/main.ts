import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Activa la validaciones de class-validator
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Va a quitar campos que no esten definidos en el dto
      forbidNonWhitelisted: true, // Lanza error si se envia un campo que no esta en el dto
    }),
  );
  await app.listen(3001);
}
bootstrap();
