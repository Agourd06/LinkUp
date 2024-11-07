import { IsString  } from "class-validator"
import { Types } from "mongoose";



export class CreateMessageDto {

    @IsString()
    readonly content: string;

    @IsString()
    readonly channel: Types.ObjectId;

    @IsString()
    readonly sender: Types.ObjectId;

}
