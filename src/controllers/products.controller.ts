import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getAll(
    @Query('limit') limit = 1,
    @Query('offset') offset = 5,
    @Query('brand') brand = 'apple',
  ) {
    return `Products: limit: ${limit}, offset: ${offset}, brand: ${brand}`;
  }

  @Get('filter')
  filter() {
    return 'Filter';
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: 'ok',
      product: id,
    };
  }

  @Post()
  create(@Body() payload: any) {
    return {
      message: 'accion de crear',
      payload,
    };
  }
}
