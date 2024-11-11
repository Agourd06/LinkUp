import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({timestamps : true})
export class Message extends Document {

    @Prop({required: true})
    content : String;

    @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], required: false })
    sender : Types.ObjectId;


    @Prop({ type: [{ type: Types.ObjectId, ref: 'Channel' }], required: false })
    channel : Types.ObjectId;

    
}

export const MessageSchema = SchemaFactory.createForClass(Message)