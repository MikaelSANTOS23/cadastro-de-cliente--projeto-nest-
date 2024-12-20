import { Module } from '@nestjs/common';
import { CadastrodeclienteService } from './cadastrodecliente.service';
import { CadastrodeclienteController } from './cadastrodecliente.controller';

@Module({
  controllers: [CadastrodeclienteController],
  providers: [CadastrodeclienteService],
})
export class CadastrodeclienteModule {}
