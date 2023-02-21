import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

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

  @Put(':id')
  update(@Param('id') id: string, @Body() payload: any) {
    return {
      message: 'ok',
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      message: 'Deleted',
      id,
    };
  }
}
