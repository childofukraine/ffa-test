import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RequestRepository } from '../request/repositories/request.repository';
import { RequestEntity } from '../request/entities/request.entity';
import { configValidate } from '../common/configs/config.validate';
import { typeOrmConfig } from '../common/database/typeorm.config';
import { RequestWorkerService } from './request-worker.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: configValidate,
    }),
    TypeOrmModule.forRoot(typeOrmConfig),
    TypeOrmModule.forFeature([RequestEntity]),
  ],
  controllers: [RequestWorkerService],
  providers: [RequestRepository],
})
export class WorkerModule {}
