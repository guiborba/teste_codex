import { Injectable, NotFoundException } from '@nestjs/common';
import { TarefasRepository } from './repository/tarefas.repository';

@Injectable()
export class TarefasService {
  constructor(private readonly repository: TarefasRepository) {}

  create(data: any) {
    return this.repository.create(data);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    const entity = await this.repository.findById(id);
    if (!entity) throw new NotFoundException('Tarefas não encontrado');
    return entity;
  }

  update(id: string, data: any) {
    return this.repository.update(id, data);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
