import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CadastrodeclienteService } from './cadastrodecliente.service';
import { CreateCadastrodeclienteDto } from './dto/create-cadastrodecliente.dto';
import { UpdateCadastrodeclienteDto } from './dto/update-cadastrodecliente.dto';

@Controller('cadastrodecliente')
export class CadastrodeclienteController {
  constructor(private readonly cadastrodeclienteService: CadastrodeclienteService) {}

  @Post()
  create(@Body() createCadastrodeclienteDto: CreateCadastrodeclienteDto) {
    return this.cadastrodeclienteService.create(createCadastrodeclienteDto);
  }

  @Get()
  findAll() {
    return this.cadastrodeclienteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadastrodeclienteService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCadastrodeclienteDto: UpdateCadastrodeclienteDto) {
    return this.cadastrodeclienteService.update(+id, updateCadastrodeclienteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadastrodeclienteService.remove(+id);
  }
}
