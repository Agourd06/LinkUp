import { IsString, IsEmail, IsOptional, IsArray } from 'class-validator';
import { Types } from 'mongoose';

export class CreateUserDto {

    
  @IsString()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly password: string;

  @IsArray()
  @IsOptional() 
  readonly friends?: Types.ObjectId[];

  @IsArray()
  @IsOptional() 
  readonly channels?: Types.ObjectId[];

  readonly score: number;
}
