import { Injectable } from '@nestjs/common';
import { Prisma, Aluno } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class AlunosRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.AlunoUncheckedCreateInput): Promise<Aluno> {
    return this.prisma.aluno.create({ data });
  }

  findAll(): Promise<Aluno[]> {
    return this.prisma.aluno.findMany();
  }

  findById(id: string): Promise<Aluno | null> {
    return this.prisma.aluno.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.AlunoUncheckedUpdateInput): Promise<Aluno> {
    return this.prisma.aluno.update({ where: { id }, data });
  }

  delete(id: string): Promise<Aluno> {
    return this.prisma.aluno.delete({ where: { id } });
  }
}
