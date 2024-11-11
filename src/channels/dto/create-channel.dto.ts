import { IsString , IsOptional, IsArray, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';
import { Types } from 'mongoose';
import { ChannelType } from 'src/common/enums/channel.enum';


export class CreateChannelDto {

    @IsString()
    @IsNotEmpty()  
    readonly name: string;
  
    @IsEnum(ChannelType)
    @IsNotEmpty()  
    readonly type: ChannelType;
 
    @IsArray()
    @IsOptional() 
    readonly members?: Types.ObjectId[];

    @IsNotEmpty()  
    @IsNumber()
    readonly score: number;
    
}
