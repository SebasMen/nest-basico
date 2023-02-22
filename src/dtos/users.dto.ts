import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly lastname: string;

  @IsString()
  @IsNotEmpty()
  readonly job: string;

  @IsUrl()
  @IsNotEmpty()
  readonly image: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
