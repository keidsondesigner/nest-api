import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { name, email, password }: CreateUserDTO) {
    return { name, email, password };
  }

  @Get()
  async findMany() {
    return { users: [] };
  }

  @Get(':id')
  async findUnique(@Param() param) {
    return { user: {}, param };
  }

  @Put(':id')
  async update(@Body() body, @Param() param) {
    return {
      method: 'put',
      body,
      param,
    };
  }

  @Patch(':id')
  async updatePartial(@Body() body, @Param() param) {
    return {
      method: 'patch',
      body,
      param,
    };
  }

  @Delete(':id')
  async delete(@Param() param) {
    return {
      param,
    };
  }
}
