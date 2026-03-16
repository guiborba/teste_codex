import { Injectable } from '@nestjs/common';
import { Prisma, Mensagem } from '@prisma/client';
import { PrismaService } from '../../../database/prisma/prisma.service';

@Injectable()
export class MensagensRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: Prisma.MensagemUncheckedCreateInput): Promise<Mensagem> {
    return this.prisma.mensagem.create({ data });
  }

  findAll(): Promise<Mensagem[]> {
    return this.prisma.mensagem.findMany();
  }

  findById(id: string): Promise<Mensagem | null> {
    return this.prisma.mensagem.findUnique({ where: { id } });
  }

  update(id: string, data: Prisma.MensagemUncheckedUpdateInput): Promise<Mensagem> {
    return this.prisma.mensagem.update({ where: { id }, data });
  }

  delete(id: string): Promise<Mensagem> {
    return this.prisma.mensagem.delete({ where: { id } });
  }
}
