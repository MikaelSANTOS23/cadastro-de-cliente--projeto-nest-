import { PartialType } from '@nestjs/mapped-types';
import { CreateCadastrodeclienteDto } from './create-cadastrodecliente.dto';

export class UpdateCadastrodeclienteDto extends PartialType(CreateCadastrodeclienteDto) {}
