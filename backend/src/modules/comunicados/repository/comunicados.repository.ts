import { Injectable } from '@nestjs/common';
import { Prisma, Comunicado } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class ComunicadosRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.ComunicadoUncheckedCreateInput): Promise<Comunicado> {
    return this.prisma.comunicado.create({ data });
  }

  findAll(): Promise<Comunicado[]> {
    return this.prisma.comunicado.findMany();
  }

  findById(id: string): Promise<Comunicado | null> {
    return this.prisma.comunicado.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.ComunicadoUncheckedUpdateInput): Promise<Comunicado> {
    return this.prisma.comunicado.update({ where: { id }, data });
  }

  delete(id: string): Promise<Comunicado> {
    return this.prisma.comunicado.delete({ where: { id } });
  }
}
