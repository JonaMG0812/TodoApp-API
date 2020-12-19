import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { users } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  create({ username, email, password }: CreateUserDto): Promise<users> {
    return this.prisma.users.create({ data: { username, email, password } });
  }

  findOne(id: number): Promise<users> {
    return this.prisma.users.findUnique({ where: { id } });
  }

  update(id: number, { username, password }: UpdateUserDto): Promise<users> {
    return this.prisma.users.update({
      where: { id },
      data: { username, password },
    });
  }
}
