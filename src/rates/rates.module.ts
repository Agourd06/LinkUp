import { Module } from '@nestjs/common';
import { RatesService } from './rates.service';
import { RatesController } from './rates.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Rate, rateSchema } from './rates.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Rate.name, schema: rateSchema }]),
  ],
  controllers: [RatesController],
  providers: [RatesService],
})
export class RatesModule {}
