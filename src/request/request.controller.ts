import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateRequestDto } from 'src/common/dtos/request/create-request.dto';
import { RequestService } from './request.service';

@Controller('request')
export class RequestController {
  constructor(private readonly requestService: RequestService) {}

  @Post()
  async createRequest(@Body() body: CreateRequestDto) {
    return this.requestService.createRequest(body);
  }

  @Get()
  async getAllRequests() {
    return this.requestService.getAllRequests();
  }
}
