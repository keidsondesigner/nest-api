import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  //prisma.user."create" inserir um único registro;
  //prisma.user."createMany" inserir vários registro de uma vez;
  async create({ email, name, password }: CreateUserDTO) {
    return await this.prisma.user.create({
      // os dados que quero salvar
      data: { email, name, password },
    });
  }

  async list() {
    return await this.prisma.user.findMany();
  }

  async show(id: number) {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }
}
