import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from 'src/app.module';
import { microserviceConfig } from 'src/config/KafkaConfig';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.connectMicroservice(microserviceConfig);

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth(
      { type: 'http', scheme: 'bearer', bearerFormat: 'JWT', in: 'header' },
      'jwt',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.startAllMicroservices();
  await app.listen(process.env.PORT);
}

bootstrap();
