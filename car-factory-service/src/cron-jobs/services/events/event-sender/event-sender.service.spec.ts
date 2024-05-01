import { Test, TestingModule } from '@nestjs/testing';
import { EventSenderService } from './event-sender.service';

describe('EventSenderService', () => {
  let service: EventSenderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EventSenderService],
    }).compile();

    service = module.get<EventSenderService>(EventSenderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
