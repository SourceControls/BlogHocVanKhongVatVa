import { Test, TestingModule } from '@nestjs/testing';
import { LiteraryService } from './literary.service';

describe('LiteraryService', () => {
  let service: LiteraryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LiteraryService],
    }).compile();

    service = module.get<LiteraryService>(LiteraryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
