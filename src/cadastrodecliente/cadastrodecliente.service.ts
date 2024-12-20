import { Injectable } from '@nestjs/common';
import { CreateCadastrodeclienteDto } from './dto/create-cadastrodecliente.dto';
import { UpdateCadastrodeclienteDto } from './dto/update-cadastrodecliente.dto';

@Injectable()
export class CadastrodeclienteService {
  create(createCadastrodeclienteDto: CreateCadastrodeclienteDto) {
    return 'This action adds a new cadastrodecliente';
  }

  findAll() {
    return `This action returns all cadastrodecliente`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cadastrodecliente`;
  }

  update(id: number, updateCadastrodeclienteDto: UpdateCadastrodeclienteDto) {
    return `This action updates a #${id} cadastrodecliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cadastrodecliente`;
  }
}
