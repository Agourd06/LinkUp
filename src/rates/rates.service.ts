import { Injectable } from '@nestjs/common';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Rate } from './rates.schema';
import { Model } from 'mongoose';

@Injectable()
export class RatesService {

  constructor(@InjectModel(Rate.name) private rateModel : Model<Rate>){}
  async createRate(data: CreateRateDto): Promise<Rate> {
    const rate = new this.rateModel(data)
    return rate.save();
  }

  async findAll(): Promise<Rate[]> {
    return this.rateModel.find().exec();

  }

  findOne(id: string) : Promise<Rate> {
    return this.rateModel.findById(id).exec();
  }

  updateRate(id: string, data: UpdateRateDto) : Promise<Rate> {
    return this.rateModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  deleteRate(id: string) {
    return this.rateModel.findByIdAndDelete(id).exec();
  }
}
