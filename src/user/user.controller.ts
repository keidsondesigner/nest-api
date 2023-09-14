import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdatePutUserDTO } from './dto/update-put-user.dto';
import { UpdatePatchUserDTO } from './dto/update-patch-user.dto';

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
  async update(
    @Body() { name, email, password }: UpdatePutUserDTO,
    @Param() param,
  ) {
    return {
      method: 'put',
      name,
      email,
      password,
      param,
    };
  }

  @Patch(':id')
  async updatePartial(
    @Body() { name, email, password }: UpdatePatchUserDTO,
    @Param() param,
  ) {
    return {
      method: 'patch',
      name,
      email,
      password,
      param,
    };
  }

  @Delete(':id')
  // convertendo o id em string para number;
  async delete(@Param('id', ParseIntPipe) id) {
    return {
      id,
    };
  }
}
