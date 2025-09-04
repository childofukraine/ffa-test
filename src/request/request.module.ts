import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestController } from './request.controller';
import { RabbitMQModule } from 'src/rabbitmq/rabbitmq.module';
import { RequestService } from './request.service';
import { RequestEntity } from './entities/request.entity';
import { RequestRepository } from './repositories/request.repository';
import { AppCacheModule } from 'src/cache/cache.module';

@Module({
  imports: [
    RabbitMQModule,
    TypeOrmModule.forFeature([RequestEntity]),
    AppCacheModule,
  ],
  controllers: [RequestController],
  providers: [RequestService, RequestRepository],
  exports: [RequestService],
})
export class RequestModule {}
