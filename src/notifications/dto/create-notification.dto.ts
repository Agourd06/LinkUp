import { IsNotEmpty, IsMongoId } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty()
  @IsMongoId()
  userId: string;

  @IsNotEmpty()
  @IsMongoId()
  channelId: string;

  @IsNotEmpty()
  @IsMongoId()
  messageId: string;
}
