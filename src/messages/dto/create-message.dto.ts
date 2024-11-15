import { IsNotEmpty, IsString } from 'class-validator';
import { Types } from 'mongoose';

export class CreateMessageDto {
  @IsString()
  @IsNotEmpty()  
  readonly content: string;

  @IsString()
  @IsNotEmpty()
  readonly channel: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  readonly sender: Types.ObjectId;

  @IsString()
  @IsNotEmpty()
  readonly recipient: Types.ObjectId;
}
