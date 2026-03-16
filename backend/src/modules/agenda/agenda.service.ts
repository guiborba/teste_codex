import { Injectable, NotFoundException } from '@nestjs/common';
import { AgendaRepository } from './repository/agenda.repository';

@Injectable()
export class AgendaService {
  constructor(private readonly repository: AgendaRepository) {}

  create(data: any) {
    return this.repository.create(data);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    const entity = await this.repository.findById(id);
    if (!entity) throw new NotFoundException('Agenda não encontrado');
    return entity;
  }

  update(id: string, data: any) {
    return this.repository.update(id, data);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
