import { IsNumber, IsOptional, IsString, IsNotEmpty } from "class-validator";
import { Types } from "mongoose";

export class UpdateRateDto {
    @IsOptional()
    @IsNumber()
    score?: number;

    @IsString()
    @IsNotEmpty()  
    readonly rater: Types.ObjectId;

    @IsString()
    @IsNotEmpty()  
    readonly ratedUser: Types.ObjectId;
}
