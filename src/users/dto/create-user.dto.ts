import { IsString, IsEmail, IsOptional, IsArray } from 'class-validator';

export class CreateUserDto {

    
  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsArray()
  @IsOptional() 
  readonly friends?: string[];

  @IsArray()
  @IsOptional() 
  readonly channels?: string[];

  readonly score: number;
}
