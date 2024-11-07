import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { MessagesModule } from './messages/messages.module';
import { ChannelsModule } from './channels/channels.module';



@Module({
  imports: [
    ConfigModule.forRoot({'isGlobal' : true}),
    MongooseModule.forRoot('mongodb://localhost:27017/LinkUp'),
    UsersModule,
    MessagesModule,
    ChannelsModule],
  controllers: [AppController],
  providers: [AppService],
})



export class AppModule {}
