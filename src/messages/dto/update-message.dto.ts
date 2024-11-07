import { IsString, IsOptional } from "class-validator";
import { Types } from "mongoose";

export class UpdateMessageDto {

    @IsOptional()
    @IsString()
    content?: string;

    @IsOptional()
    @IsString()
    channel?: Types.ObjectId;

    @IsOptional()
    @IsString()
    sender?: Types.ObjectId;

}
