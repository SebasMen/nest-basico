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
} from '@nestjs/common';
import { ProductsService } from 'src/services/products.service';
@Controller('products')
export class ProductsController {
  constructor(private productSercive: ProductsService) {}

  @Get()
  getAll(
    @Query('limit') limit = 1,
    @Query('offset') offset = 5,
    @Query('brand') brand = 'apple',
  ) {
    // return `Products: limit: ${limit}, offset: ${offset}, brand: ${brand}`;
    return this.productSercive.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    // return {
    //   message: 'ok',
    //   product: id,
    // };

    return this.productSercive.findOne(+id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() payload: any) {
    // return {
    //   message: 'accion de crear',
    //   payload,
    // };

    return this.productSercive.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    // return {
    //   message: 'ok',
    //   id,
    //   payload,
    // };

    return this.productSercive.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    // return {
    //   message: 'Deleted',
    //   id,
    // };

    return this.productSercive.remove(+id);
  }
}
