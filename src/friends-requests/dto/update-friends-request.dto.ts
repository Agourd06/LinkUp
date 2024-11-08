import { PartialType } from '@nestjs/mapped-types';
import { CreateFriendsRequestDto } from './create-friends-request.dto';

export class UpdateFriendsRequestDto extends PartialType(CreateFriendsRequestDto) {}
