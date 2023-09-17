import { UserService } from './user.service';
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
  ///
  constructor(private readonly userService: UserService) {}
  @Post()
  async create(@Body() { name, email, password }: CreateUserDTO) {
    return await this.userService.create({ name, email, password });
  }

  @Get()
  async list() {
    return await this.userService.list();
  }

  @Get(':id') // ParseIntPipe fazendo a conversão id 'string' para 'number';
  async show(@Param('id', ParseIntPipe) id: number) {
    return this.userService.show(id);
  }

  @Put(':id')
  async update(
    @Body() { name, email, password }: UpdatePutUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return {
      method: 'put',
      name,
      email,
      password,
      id,
    };
  }

  @Patch(':id')
  async updatePartial(
    @Body() { name, email, password }: UpdatePatchUserDTO,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return {
      method: 'patch',
      name,
      email,
      password,
      id,
    };
  }

  @Delete(':id')
  // convertendo o id em string para number;
  async delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
