import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from '../prisma/prisma.service';
import { tasks } from '@prisma/client';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}
  create({
    userId,
    title,
    description,
    dueDate,
    status,
  }: CreateTaskDto): Promise<tasks> {
    return this.prisma.tasks.create({
      data: {
        title,
        description,
        dueDate,
        status,
        users: { connect: { id: userId } },
      },
    });
  }

  findAll(): Promise<tasks[]> {
    return this.prisma.tasks.findMany();
  }

  findOne(id: number): Promise<tasks> {
    return this.prisma.tasks.findUnique({ where: { id } });
  }

  update(
    id: number,
    { title, description, dueDate, status }: UpdateTaskDto,
  ): Promise<tasks> {
    return this.prisma.tasks.update({
      where: { id },
      data: { title, description, dueDate, status },
    });
  }

  remove(id: number): Promise<tasks> {
    return this.prisma.tasks.delete({ where: { id } });
  }
}
