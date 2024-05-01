import { Test, TestingModule } from '@nestjs/testing';
import { CarDaoService } from './car.dao.service';

describe('CarDaoService', () => {
  let service: CarDaoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarDaoService],
    }).compile();

    service = module.get<CarDaoService>(CarDaoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
