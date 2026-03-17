import { Injectable, NotFoundException } from '@nestjs/common';
import { TurmasRepository } from './repository/turmas.repository';

@Injectable()
export class TurmasService {
  constructor(private readonly repository: TurmasRepository) {}

  create(data: any) {
    return this.repository.create(data);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    const entity = await this.repository.findById(id);
    if (!entity) throw new NotFoundException('Turmas não encontrado');
    return entity;
  }

  update(id: string, data: any) {
    return this.repository.update(id, data);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
