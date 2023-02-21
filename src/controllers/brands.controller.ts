import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getAll() {
    return {
      message: 'ok',
      brands: 'All brands',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return {
      message: 'ok',
      brand: id,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'ok',
      payload,
    };
  }
}
