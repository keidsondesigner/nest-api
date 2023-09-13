import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() body) {
    return { body };
  }

  @Get()
  async findMany() {
    return { users: [] };
  }

  @Get(':id')
  async findUnique(@Param() param) {
    return { user: {}, param };
  }
}
