import { IsString, IsOptional, IsArray, IsEnum, IsNumber } from 'class-validator';
import { Types } from 'mongoose';
import { ChannelType } from 'src/enums/channel.enum';

export class UpdateChannelDto {

    @IsOptional()
    @IsString()
    name?: string;

    @IsOptional()
    @IsEnum(ChannelType)
    type?: ChannelType;

    @IsOptional()
    @IsArray()
    members?: Types.ObjectId[];

    @IsOptional()
    @IsNumber()
    score?: number;

}
