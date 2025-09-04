import { Injectable, Logger, Inject } from '@nestjs/common';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { ClientProxy } from '@nestjs/microservices';
import { Cache } from 'cache-manager';
import { CreateRequestDto } from 'src/common/dtos/request/create-request.dto';
import { RequestRepository } from './repositories/request.repository';
import { REDIS_KEYS } from 'src/common/consts/redis-keys';

@Injectable()
export class RequestService {
  private readonly logger = new Logger(RequestService.name);

  constructor(
    @Inject('REQUEST_SERVICE') private readonly requestClient: ClientProxy,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private readonly requestRepository: RequestRepository,
  ) {}

  async createRequest(body: CreateRequestDto) {
    const request = await this.requestRepository.createRequest(body);

    try {
      this.requestClient.emit('request_created', { id: request.id });
      this.logger.log(`Request ${request.id} created and sent to queue`);

      await this.cacheManager.del(REDIS_KEYS.ALL_REQUESTS);
    } catch (error) {
      this.logger.error('Failed to send message to RabbitMQ:', error);
    }

    return request;
  }

  async getAllRequests() {
    const cacheKey = REDIS_KEYS.ALL_REQUESTS;

    const cachedRequests = await this.cacheManager.get(cacheKey);
    if (cachedRequests) {
      this.logger.log('Returning requests from cache');
      return cachedRequests;
    }

    const requests = await this.requestRepository.findAllRequests();

    await this.cacheManager.set(cacheKey, requests);
    this.logger.log('Requests cached successfully');

    return requests;
  }
}
