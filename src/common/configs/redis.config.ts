import { config } from 'dotenv';

config();

const getRedisConfig = () => {
  const props = ['REDIS_HOST', 'REDIS_PORT', 'REDIS_DB', 'REDIS_TTL'];

  for (const prop of props) {
    if (!process.env[prop]) {
      throw new Error(`[RedisConfig]: variable ${prop} is not configured`);
    }
  }

  return {
    host: process.env.REDIS_HOST as string,
    port: Number(process.env.REDIS_PORT),
    password: process.env.REDIS_PASSWORD || undefined,
    db: Number(process.env.REDIS_DB),
    ttl: Number(process.env.REDIS_TTL),
  };
};

export const redisConfig = getRedisConfig();
