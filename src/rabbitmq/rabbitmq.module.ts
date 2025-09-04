import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';
import { createRabbitMQConfig } from 'src/common/configs/rabbitmq.config';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([
      {
        name: 'REQUEST_SERVICE',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) =>
          createRabbitMQConfig(configService, 'REQUEST_SERVICE'),
        inject: [ConfigService],
      },
    ]),
  ],
  exports: [ClientsModule],
})
export class RabbitMQModule {}
