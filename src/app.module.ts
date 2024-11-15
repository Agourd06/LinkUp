import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MessagesModule } from './messages/messages.module';
import { ChannelsModule } from './channels/channels.module';
import { RatesModule } from './rates/rates.module';
import { FriendsRequestsModule } from './friends-requests/friends-requests.module';
import { NotificationsModule } from './notifications/notifications.module';



@Module({
  imports: [
    ConfigModule.forRoot({'isGlobal' : true}),
    MongooseModule.forRoot('mongodb://localhost:27017/LinkUp'),
    UsersModule,
    MessagesModule,
    ChannelsModule,
    RatesModule,
    FriendsRequestsModule,
    NotificationsModule],
  controllers: [AppController],
  providers: [AppService],
})





export class AppModule {}
