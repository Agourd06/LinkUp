import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FriendsRequestsService } from './friends-requests.service';
import { CreateFriendsRequestDto } from './dto/create-friends-request.dto';
import { UpdateFriendsRequestDto } from './dto/update-friends-request.dto';

@Controller('friends-requests')
export class FriendsRequestsController {
  constructor(private readonly friendsRequestsService: FriendsRequestsService) {}

  @Post()
  create(@Body() data: CreateFriendsRequestDto) {
    return this.friendsRequestsService.createFriendRequest(data);
  }

  @Get()
  findAll() {
    return this.friendsRequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.friendsRequestsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateFriendsRequestDto) {
    return this.friendsRequestsService.updateFriendRequest(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.friendsRequestsService.deleteFriendRequest(id);
  }
}
