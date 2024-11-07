import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { Message } from './messages.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class MessagesService {
  constructor(@InjectModel(Message.name) private messageModel: Model<Message>) {}

  async createUser(data: CreateMessageDto): Promise<Message> {
    const channel = new this.messageModel(data);
    return channel.save();
  }

  async findAll(): Promise<Message[]> {
    return this.messageModel.find().exec();
  }

  async findOne(id: string): Promise<Message> {
    return this.messageModel.findById(id).exec();
  }

  async updateUser(id: string, data: UpdateMessageDto): Promise<Message> {
    return this.messageModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteUser(id: string): Promise<Message> {
    return this.messageModel.findByIdAndDelete(id).exec();
  }
}
