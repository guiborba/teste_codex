import { Injectable } from '@nestjs/common';
import { Prisma, Tarefa } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class TarefasRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.TarefaUncheckedCreateInput): Promise<Tarefa> {
    return this.prisma.tarefa.create({ data });
  }

  findAll(): Promise<Tarefa[]> {
    return this.prisma.tarefa.findMany();
  }

  findById(id: string): Promise<Tarefa | null> {
    return this.prisma.tarefa.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.TarefaUncheckedUpdateInput): Promise<Tarefa> {
    return this.prisma.tarefa.update({ where: { id }, data });
  }

  delete(id: string): Promise<Tarefa> {
    return this.prisma.tarefa.delete({ where: { id } });
  }
}
