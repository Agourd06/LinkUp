import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Notification } from './notifactions.schema';

@Injectable()
export class NotificationService {
  constructor(
    @InjectModel(Notification.name) private NotificationModel: Model<Notification>,
  ) {}

  async createNotification(userId: string, channelId: string, messageId: string): Promise<Notification> {
    const notification = new this.NotificationModel({ userId, channelId, messageId });
    return notification.save();
  }

  async getUserNotifications(userId: string): Promise<Notification[]> {
    return this.NotificationModel.find({ userId }).sort({ createdAt: -1 }).exec();
  }

  async markAsRead(notificationId: string): Promise<Notification> {
    return this.NotificationModel.findByIdAndUpdate(notificationId, { isRead: true }, { new: true });
  }
}
