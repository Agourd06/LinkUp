import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { Types } from "mongoose";

export class CreateRateDto {

    @IsNumber()
    readonly score: number;

    @IsString()
    @IsNotEmpty()  
    readonly rater: Types.ObjectId;

    @IsString()
    @IsNotEmpty() 
    readonly ratedUser: Types.ObjectId;

}
