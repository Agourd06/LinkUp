import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RatesService } from './rates.service';
import { CreateRateDto } from './dto/create-rate.dto';
import { UpdateRateDto } from './dto/update-rate.dto';

@Controller('rates')
export class RatesController {
  constructor(private readonly ratesService: RatesService) {}

  @Post()
  create(@Body() createRateDto: CreateRateDto) {
    return this.ratesService.createRate(createRateDto);
  }

  @Get()
  findAll() {
    return this.ratesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ratesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateRateDto: UpdateRateDto) {
    return this.ratesService.updateRate(id, updateRateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ratesService.deleteRate(id);
  }
}
