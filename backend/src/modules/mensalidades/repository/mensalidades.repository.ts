import { Injectable } from '@nestjs/common';
import { Prisma, Mensalidade } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class MensalidadesRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.MensalidadeUncheckedCreateInput): Promise<Mensalidade> {
    return this.prisma.mensalidade.create({ data });
  }

  findAll(): Promise<Mensalidade[]> {
    return this.prisma.mensalidade.findMany();
  }

  findById(id: string): Promise<Mensalidade | null> {
    return this.prisma.mensalidade.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.MensalidadeUncheckedUpdateInput): Promise<Mensalidade> {
    return this.prisma.mensalidade.update({ where: { id }, data });
  }

  delete(id: string): Promise<Mensalidade> {
    return this.prisma.mensalidade.delete({ where: { id } });
  }
}
