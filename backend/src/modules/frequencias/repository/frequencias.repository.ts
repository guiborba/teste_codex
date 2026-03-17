import { Injectable } from '@nestjs/common';
import { Prisma, Frequencia } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class FrequenciasRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.FrequenciaUncheckedCreateInput): Promise<Frequencia> {
    return this.prisma.frequencia.create({ data });
  }

  findAll(): Promise<Frequencia[]> {
    return this.prisma.frequencia.findMany();
  }

  findById(id: string): Promise<Frequencia | null> {
    return this.prisma.frequencia.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.FrequenciaUncheckedUpdateInput): Promise<Frequencia> {
    return this.prisma.frequencia.update({ where: { id }, data });
  }

  delete(id: string): Promise<Frequencia> {
    return this.prisma.frequencia.delete({ where: { id } });
  }
}
