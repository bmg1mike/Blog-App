import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  ); // 👈 Add this line
  const config = new DocumentBuilder()
    .setVersion('1.0')
    .setTitle('NestJS API')
    .setDescription('The NestJS API description')
    .setVersion('2.0')
    .addOAuth2()
    .addBearerAuth()
    .addBasicAuth()
    .addApiKey()
    .addOAuth2()
    .addServer('http://localhost:3000')
    .addServer('https://api.example.com')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
