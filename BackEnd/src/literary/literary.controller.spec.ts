import { Test, TestingModule } from '@nestjs/testing';
import { LiteraryController } from './literary.controller';
import { LiteraryService } from './literary.service';

describe('LiteraryController', () => {
  let controller: LiteraryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LiteraryController],
      providers: [LiteraryService],
    }).compile();

    controller = module.get<LiteraryController>(LiteraryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
