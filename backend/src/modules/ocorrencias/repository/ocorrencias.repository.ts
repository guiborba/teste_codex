import { Injectable } from '@nestjs/common';
import { Prisma, Ocorrencia } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class OcorrenciasRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.OcorrenciaUncheckedCreateInput): Promise<Ocorrencia> {
    return this.prisma.ocorrencia.create({ data });
  }

  findAll(): Promise<Ocorrencia[]> {
    return this.prisma.ocorrencia.findMany();
  }

  findById(id: string): Promise<Ocorrencia | null> {
    return this.prisma.ocorrencia.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.OcorrenciaUncheckedUpdateInput): Promise<Ocorrencia> {
    return this.prisma.ocorrencia.update({ where: { id }, data });
  }

  delete(id: string): Promise<Ocorrencia> {
    return this.prisma.ocorrencia.delete({ where: { id } });
  }
}
