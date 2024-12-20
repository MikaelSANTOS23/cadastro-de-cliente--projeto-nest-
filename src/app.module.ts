import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastrodeclienteModule } from './cadastrodecliente/cadastrodecliente.module';

@Module({
  imports: [CadastrodeclienteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
