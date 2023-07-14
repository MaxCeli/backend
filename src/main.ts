import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config/dist';
import { SERVER_PORT } from './config/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  // Server port
  const port = +configService.get<number>(SERVER_PORT) || 3000;
  await app.listen(port);
  console.log(`Escucha al puerto ${await app.getUrl()}`);
}
bootstrap();
