import { Module } from '@nestjs/common';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-store';
import { redisConfig } from '../common/configs/redis.config';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: redisConfig.host,
      port: redisConfig.port,
      password: redisConfig.password,
      db: redisConfig.db,
      ttl: redisConfig.ttl,
    }),
  ],
  exports: [CacheModule],
})
export class AppCacheModule {}
