import { Module } from '@nestjs/common';
import { FriendsRequestsService } from './friends-requests.service';
import { FriendsRequestsController } from './friends-requests.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FriendRequest, friendRequestSchema } from './friends-requests.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: FriendRequest.name, schema: friendRequestSchema }]),
  ],
  controllers: [FriendsRequestsController],
  providers: [FriendsRequestsService],
})
export class FriendsRequestsModule {}
