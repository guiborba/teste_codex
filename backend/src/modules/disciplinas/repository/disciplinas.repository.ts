import { Injectable } from '@nestjs/common';
import { Prisma, Disciplina } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class DisciplinasRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.DisciplinaUncheckedCreateInput): Promise<Disciplina> {
    return this.prisma.disciplina.create({ data });
  }

  findAll(): Promise<Disciplina[]> {
    return this.prisma.disciplina.findMany();
  }

  findById(id: string): Promise<Disciplina | null> {
    return this.prisma.disciplina.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.DisciplinaUncheckedUpdateInput): Promise<Disciplina> {
    return this.prisma.disciplina.update({ where: { id }, data });
  }

  delete(id: string): Promise<Disciplina> {
    return this.prisma.disciplina.delete({ where: { id } });
  }
}
