import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { WorkerModule } from './worker/worker.module';
import { createRabbitMQConfig } from './common/configs/rabbitmq.config';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    WorkerModule,
    createRabbitMQConfig(new ConfigService(), 'REQUEST_SERVICE'),
  );

  const logger = new Logger('WorkerBootstrap');
  await app.listen();
  logger.log('Worker microservice is listening for messages...');
}

bootstrap();
