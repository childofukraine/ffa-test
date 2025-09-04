import { ConfigService } from '@nestjs/config';
import { RmqOptions, Transport } from '@nestjs/microservices';

export function createRabbitMQConfig(
  configService: ConfigService,
  queue: string,
): RmqOptions {
  return {
    transport: Transport.RMQ,
    options: {
      urls: [
        `amqp://${configService.get('RABBITMQ_USER')}:` +
          `${configService.get('RABBITMQ_PASSWORD')}@` +
          `localhost:${configService.get('RABBITMQ_PORT')}/` +
          `${configService.get('RABBITMQ_HOST')}`,
      ],
      queue: queue,
      queueOptions: {
        durable: false,
      },
    },
  };
}
