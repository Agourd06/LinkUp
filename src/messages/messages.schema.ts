import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";

@Schema({ timestamps: true })
export class Message extends Document {
  @Prop({ required: true })
  content: string;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  sender: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Channel', required: true })
  channel: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'User', required: false })
  recipient: Types.ObjectId;
}

export const MessageSchema = SchemaFactory.createForClass(Message);
