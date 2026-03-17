import { Injectable } from '@nestjs/common';
import { Prisma, Nota } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class NotasRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.NotaUncheckedCreateInput): Promise<Nota> {
    return this.prisma.nota.create({ data });
  }

  findAll(): Promise<Nota[]> {
    return this.prisma.nota.findMany();
  }

  findById(id: string): Promise<Nota | null> {
    return this.prisma.nota.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.NotaUncheckedUpdateInput): Promise<Nota> {
    return this.prisma.nota.update({ where: { id }, data });
  }

  delete(id: string): Promise<Nota> {
    return this.prisma.nota.delete({ where: { id } });
  }
}
