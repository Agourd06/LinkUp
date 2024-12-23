import { Module } from '@nestjs/common';
import { NotificationService } from './notifications.service';
import { NotificationController } from './notifications.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Notification, NotificationSchema } from './notifactions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Notification.name, schema: NotificationSchema }]),
  ],
  controllers: [NotificationController],
  providers: [NotificationService],
})
export class NotificationsModule {}
