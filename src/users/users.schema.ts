import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: false })
  password: string;

  @Prop({ required: false })
  friends: string[];

  // @Prop({ type: [{ type: String, ref: 'Channel' }], required: false })
  // channels: Channel[];

  @Prop({ required: false })
  score: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
