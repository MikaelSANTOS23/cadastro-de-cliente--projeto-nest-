import { Test, TestingModule } from '@nestjs/testing';
import { CadastrodeclienteController } from './cadastrodecliente.controller';
import { CadastrodeclienteService } from './cadastrodecliente.service';

describe('CadastrodeclienteController', () => {
  let controller: CadastrodeclienteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CadastrodeclienteController],
      providers: [CadastrodeclienteService],
    }).compile();

    controller = module.get<CadastrodeclienteController>(CadastrodeclienteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
