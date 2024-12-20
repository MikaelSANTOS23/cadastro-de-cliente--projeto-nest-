import { IsEmail, IsPhoneNumber, IsString } from 'class-validator';

export class CreateCadastrodeclienteDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @IsPhoneNumber()
  phonenumber: string;
}
