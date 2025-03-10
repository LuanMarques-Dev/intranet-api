
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://127.0.0.1:5500',
    methods: 'GET,POST',
    allowedHeaders: 'Content-Type, Accept',
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
