import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    // MongooseModule.forFeature([{ name: rates.name, schema: MessageSchema }]),
  ],
  controllers: [RatesController],
  providers: [RatesService],
})
export class RatesModule {}
