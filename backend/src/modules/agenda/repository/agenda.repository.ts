import { Injectable } from '@nestjs/common';
import { Prisma, AgendaEvento } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class AgendaRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.AgendaEventoUncheckedCreateInput): Promise<AgendaEvento> {
    return this.prisma.agendaEvento.create({ data });
  }

  findAll(): Promise<AgendaEvento[]> {
    return this.prisma.agendaEvento.findMany();
  }

  findById(id: string): Promise<AgendaEvento | null> {
    return this.prisma.agendaEvento.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.AgendaEventoUncheckedUpdateInput): Promise<AgendaEvento> {
    return this.prisma.agendaEvento.update({ where: { id }, data });
  }

  delete(id: string): Promise<AgendaEvento> {
    return this.prisma.agendaEvento.delete({ where: { id } });
  }
}
