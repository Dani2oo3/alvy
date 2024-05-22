import { NestFactory } from '@nestjs/core';
import { AuthAppModule } from './auth-app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthAppModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
