import { Injectable, NotFoundException } from '@nestjs/common';
import { AlunosRepository } from './repository/alunos.repository';

@Injectable()
export class AlunosService {
  constructor(private readonly repository: AlunosRepository) {}

  create(data: any) {
    return this.repository.create(data);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    const entity = await this.repository.findById(id);
    if (!entity) throw new NotFoundException('Alunos não encontrado');
    return entity;
  }

  update(id: string, data: any) {
    return this.repository.update(id, data);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
