import { Body, Controller, Get, Param, Post } from '@nestjs/common';

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
}
