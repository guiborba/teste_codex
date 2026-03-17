import { Injectable } from '@nestjs/common';
import { Prisma, Turma } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class TurmasRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.TurmaUncheckedCreateInput): Promise<Turma> {
    return this.prisma.turma.create({ data });
  }

  findAll(): Promise<Turma[]> {
    return this.prisma.turma.findMany();
  }

  findById(id: string): Promise<Turma | null> {
    return this.prisma.turma.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.TurmaUncheckedUpdateInput): Promise<Turma> {
    return this.prisma.turma.update({ where: { id }, data });
  }

  delete(id: string): Promise<Turma> {
    return this.prisma.turma.delete({ where: { id } });
  }
}
