// main.ts (version locale)
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
    origin: process.env.URL_FRONTEND,
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('E-commerce API')
    .setDescription(
      'API de gestion des utilisateurs, produits, commandes, etc.',
    )
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
  console.log(`🚀 Application is running on: http://localhost:3000`);
}
bootstrap();
