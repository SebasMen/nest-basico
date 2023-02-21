import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get()
  getProducts(
    @Query('limit') limit = 1,
    @Query('offset') offset = 5,
    @Query('brand') brand = 'apple',
  ) {
    return `Products: limit: ${limit}, offset: ${offset}, brand: ${brand}`;
  }

  @Get('filter')
  getProductFilter() {
    return 'Filter';
  }

  @Get(':id')
  getProduct(@Param('id') id: string) {
    return `Product ${id}`;
  }
}
