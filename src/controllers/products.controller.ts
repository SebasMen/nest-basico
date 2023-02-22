import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  // ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from 'src/services/products.service';
import { ParseIntPipe } from '../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from '../dtos/products.dtos';
@Controller('products')
export class ProductsController {
  constructor(private productSercive: ProductsService) {}

  @Get()
  getAll(
    @Query('limit') limit = 1,
    @Query('offset') offset = 5,
    @Query('brand') brand = 'apple',
  ) {
    return this.productSercive.findAll();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.productSercive.findOne(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: CreateProductDto) {
    return this.productSercive.create(payload);
  }

  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateProductDto,
  ) {
    return this.productSercive.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.productSercive.remove(id);
  }
}
