import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('customers')
export class CustomersController {
  @Get()
  getAll() {
    return {
      message: 'ok',
      customers: 'All customers',
    };
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return {
      message: 'ok',
      customer: id,
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
