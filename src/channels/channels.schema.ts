import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../users/users.schema';
import  { ChannelType } from '../enums/channel.enum'
@Schema({ timestamps: true })
export class Channel extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ type: [{ type: Object, ref: 'User' }], required: false })
  members: User[];

  @Prop({ enum: ChannelType, required: true })
  type: ChannelType;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
