import { Test, TestingModule } from '@nestjs/testing';
import { CadastrodeclienteService } from './cadastrodecliente.service';

describe('CadastrodeclienteService', () => {
  let service: CadastrodeclienteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CadastrodeclienteService],
    }).compile();

    service = module.get<CadastrodeclienteService>(CadastrodeclienteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
