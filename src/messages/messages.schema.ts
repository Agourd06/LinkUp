import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({timestamps : true})
export class Message extends Document {

    @Prop({required: true})
    content : String;

    @Prop({ type: [{ type: String, ref: 'User' }], required: false })
    sender : String;


    @Prop({ type: [{ type: String, ref: 'Channel' }], required: false })
    channel : String;

    
}

export const MessageSchema = SchemaFactory.createForClass(Message)