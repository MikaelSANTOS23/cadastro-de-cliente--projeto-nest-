import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCadastrodeclienteDto } from './dto/create-cadastrodecliente.dto';
import { UpdateCadastrodeclienteDto } from './dto/update-cadastrodecliente.dto';
import { promises } from 'dns';
import {express} from 'express';
import { Cadastrodecliente } from 'src/entities/cadastrodecliente.entity';

@Injectable()
export class CadastrodeclienteService {
  private cadastro: CreateCadastrodeclienteDto[] = [];
  create(createCadastrodeclienteDto: CreateCadastrodeclienteDto) {
    this.cadastro.push('cadastrodecliente');
    console.log(this.cadastro);
    return 'This action adds a new cadastrodecliente';
  }

  findById(id:string): CreateCadastrodeclienteDto{
    const foundcadastrodecliente = this.cadastro.filter(t => t.id === id);

    if (foundcadastrodecliente.length){
      return foundcadastrodecliente[0]
    }    

    throw new NotFoundException('Cadastrodecliente com id ${id} not found');
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
