import { IsString , IsOptional, IsArray, IsEnum } from 'class-validator';
import { Types } from 'mongoose';
import { ChannelType } from 'src/enums/channel.enum';


export class CreateChannelDto {

    @IsString()
    readonly name: string;
  
    @IsEnum(ChannelType)
    readonly type: ChannelType;
 
    @IsArray()
    @IsOptional() 
    readonly members?: Types.ObjectId[];
  
    readonly score: number;
    
}
