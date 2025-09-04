import {
  IsString,
  IsNumberString,
  IsBooleanString,
  ValidateIf,
} from 'class-validator';

export class ConfigDto {
  //TYPEORM
  @IsString()
  @ValidateIf((o) => !o.POSTGRES_USER)
  POSTGRES_USER: string;

  @IsString()
  @ValidateIf((o) => !o.POSTGRES_PASSWORD)
  POSTGRES_PASSWORD: string;

  @IsString()
  @ValidateIf((o) => !o.POSTGRES_DB)
  POSTGRES_DB: string;

  @IsNumberString()
  @ValidateIf((o) => !o.POSTGRES_PORT)
  POSTGRES_PORT: string;

  @IsBooleanString()
  @ValidateIf((o) => !o.TYPEORM_LOGGING)
  TYPEORM_LOGGING: string;

  @IsString()
  @ValidateIf((o) => !o.TYPEORM_HOST)
  TYPEORM_HOST: string;

  @IsBooleanString()
  @ValidateIf((o) => !o.TYPEORM_SSL)
  TYPEORM_SSL: string;

  //Redis
  @IsString()
  @ValidateIf((o) => !o.REDIS_HOST)
  REDIS_HOST: string;

  @IsNumberString()
  @ValidateIf((o) => !o.REDIS_PORT)
  REDIS_PORT: string;

  @IsString()
  @ValidateIf((o) => !o.REDIS_PASSWORD)
  REDIS_PASSWORD: string;

  @IsNumberString()
  @ValidateIf((o) => !o.REDIS_DB)
  REDIS_DB: string;

  @IsNumberString()
  @ValidateIf((o) => !o.REDIS_TTL)
  REDIS_TTL: string;

  //RabbitMQ
  @IsString()
  @ValidateIf((o) => !o.RABBITMQ_USER)
  RABBITMQ_USER: string;

  @IsString()
  @ValidateIf((o) => !o.RABBITMQ_PASSWORD)
  RABBITMQ_PASSWORD: string;

  @IsString()
  @ValidateIf((o) => !o.RABBITMQ_HOST)
  RABBITMQ_HOST: string;

  @IsNumberString()
  @ValidateIf((o) => !o.RABBITMQ_PORT)
  RABBITMQ_PORT: string;

  @IsNumberString()
  @ValidateIf((o) => !o.RABBITMQ_MANAGEMENT_PORT)
  RABBITMQ_MANAGEMENT_PORT: string;

  @IsString()
  @ValidateIf((o) => !o.RABBITMQ_QUEUE)
  RABBITMQ_QUEUE: string;
}
