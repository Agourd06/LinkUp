import { Controller, Get, Param, Post, Body, Patch, Put } from '@nestjs/common';
import { NotificationService } from './notifications.service';
import { Notification } from './notifactions.schema';


@Controller('notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get(':id')
  async getUserNotifications(@Param('id') userId: string): Promise<Notification[]> {
    return this.notificationService.getUserNotifications(userId);
  }

  @Put(':id/read')
  async markNotificationAsRead(@Param('id') notificationId: string): Promise<Notification> {
    return this.notificationService.markAsRead(notificationId);
  }

  @Post()
  async createNotification(
    @Body('userId') userId: string,
    @Body('channelId') channelId: string,
    @Body('messageId') messageId: string,
  ): Promise<Notification> {
    return this.notificationService.createNotification(userId, channelId, messageId);
  }
}
