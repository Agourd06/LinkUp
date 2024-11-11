import { Injectable } from '@nestjs/common';
import { CreateFriendsRequestDto } from './dto/create-friends-request.dto';
import { UpdateFriendsRequestDto } from './dto/update-friends-request.dto';
import { InjectModel } from '@nestjs/mongoose';
import { FriendRequest } from './friends-requests.schema';
import { Model } from 'mongoose';

@Injectable()
export class FriendsRequestsService {
constructor(@InjectModel(FriendRequest.name) private friendRequestModel : Model<FriendRequest>){}

  async createFriendRequest(data: CreateFriendsRequestDto) : Promise<FriendRequest> {
    const friendRequest = new this.friendRequestModel(data);
    return friendRequest.save()
  }

 async findAll() : Promise<FriendRequest[]> {
    return this.friendRequestModel.find().exec();
  }

  async findOne(id: string) : Promise<FriendRequest> {
    return this.friendRequestModel.findById(id).exec();
  }

  updateFriendRequest(id: string, data: UpdateFriendsRequestDto) {
    return this.friendRequestModel.findByIdAndUpdate(id,data,{new : true}).exec();
  }

  deleteFriendRequest(id: string) {
    return this.friendRequestModel.findByIdAndDelete(id).exec();
  }
}
