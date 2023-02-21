import { Controller, Get, Param } from '@nestjs/common';

@Controller('brands')
export class BrandsController {
  @Get()
  getBrands() {
    return 'Brands';
  }

  @Get(':id')
  getBrand(@Param('id') id: number) {
    return `Brand #${id}`;
  }
}
