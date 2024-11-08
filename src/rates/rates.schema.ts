import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";
@Schema({timestamps : true})
export class Rate extends Document {
    @Prop({type: Types.ObjectId, ref: 'User',required : true})
    rater : Types.ObjectId

    @Prop({type: Types.ObjectId, ref: 'User',required : true})
    ratedUser : Types.ObjectId


    @Prop({required : true})
    score : number
}

export const rateSchema = SchemaFactory.createForClass(Rate)