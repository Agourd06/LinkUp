import { Injectable } from '@nestjs/common';
import { CreateChannelDto } from './dto/create-channel.dto';
import { UpdateChannelDto } from './dto/update-channel.dto';
import { ChannelsModule } from './channels.module';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Channel  } from './channels.schema';

@Injectable()
export class ChannelsService {
  constructor(@InjectModel(Channel.name) private channelModel: Model<ChannelsModule>) {}

  async createChannel(data: CreateChannelDto ): Promise<ChannelsModule> {
    
    const channel = new this.channelModel(data);
    return channel.save();
  }

  async findAll(): Promise<ChannelsModule[]> {
    return this.channelModel.find().exec();
  }

  async findOne(id: string): Promise<ChannelsModule> {
    return this.channelModel.findById(id).exec();
  }

  async updateChannel(id: string, data: UpdateChannelDto): Promise<ChannelsModule> {
    return this.channelModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async deleteChannel(id: string): Promise<ChannelsModule> {
    return this.channelModel.findByIdAndDelete(id).exec();
  }
}
