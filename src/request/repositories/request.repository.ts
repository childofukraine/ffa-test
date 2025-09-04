import { InjectRepository } from '@nestjs/typeorm';
import { CreateRequestDto } from 'src/common/dtos/request/create-request.dto';
import { Repository } from 'typeorm';
import { RequestEntity } from '../entities/request.entity';
import { RequestStatus } from 'src/common/enums/request/request-status.enum';

export class RequestRepository {
  constructor(
    @InjectRepository(RequestEntity)
    private readonly requestRepository: Repository<RequestEntity>,
  ) {}

  async createRequest(body: CreateRequestDto) {
    const newRequest = this.requestRepository.create({
      ...body,
      status: RequestStatus.NEW,
    });

    const createdRequest = await this.requestRepository.save(newRequest);

    return { ...createdRequest };
  }

  async findAllRequests() {
    return await this.requestRepository.find();
  }

  async updateRequestStatus(id: string, status: RequestStatus) {
    await this.requestRepository.update(id, { status });
    return await this.requestRepository.findOne({ where: { id } });
  }
}
