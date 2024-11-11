import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { ChannelType } from '../common/enums/channel.enum';

@Schema({ timestamps: true })
export class Channel extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], default: [] })
  members: Types.ObjectId[];

  @Prop({ enum: ChannelType, required: true })
  type: ChannelType;

  @Prop({ type: Types.ObjectId, ref: 'User', required: true })
  creator: Types.ObjectId;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);

ChannelSchema.pre('save', function (next) {
  if (this.isNew && this.creator) {
    this.members = [this.creator]; 
  }
  next();
});
