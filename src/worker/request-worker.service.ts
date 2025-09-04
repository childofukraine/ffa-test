import { Injectable, Controller, Logger } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { RequestStatus } from 'src/common/enums/request/request-status.enum';
import { RequestRepository } from '../request/repositories/request.repository';

@Injectable()
@Controller()
export class RequestWorkerService {
  private readonly logger = new Logger(RequestWorkerService.name);

  constructor(private readonly requestRepository: RequestRepository) {}

  @EventPattern('request_created')
  async handleRequestCreated(data: { id: string }) {
    this.logger.log(`Processing request ${data.id}: new → in_progress`);

    setTimeout(async () => {
      await this.updateRequestStatus(data.id, RequestStatus.IN_PROGRESS);
      this.logger.log(`Request ${data.id} status updated to: in_progress`);

      setTimeout(async () => {
        await this.updateRequestStatus(data.id, RequestStatus.DONE);
        this.logger.log(`Request ${data.id} status updated to: done`);
      }, 5000);
    }, 5000);
  }

  private async updateRequestStatus(id: string, status: RequestStatus) {
    await this.requestRepository.updateRequestStatus(id, status);
  }
}
