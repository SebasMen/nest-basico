import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  @Get()
  getAll() {
    return {
      message: 'ok',
      orders: 'All oriders',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: 'ok',
      order: id,
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
