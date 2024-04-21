import { Test, TestingModule } from '@nestjs/testing';
import { EventHandlerController } from './event-handler.controller';
import { EventHandlerService } from './event-handler.service';

describe('EventHandlerController', () => {
  let controller: EventHandlerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventHandlerController],
      providers: [EventHandlerService],
    }).compile();

    controller = module.get<EventHandlerController>(EventHandlerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
