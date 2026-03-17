import { Injectable, NotFoundException } from '@nestjs/common';
import { OcorrenciasRepository } from './repository/ocorrencias.repository';

@Injectable()
export class OcorrenciasService {
  constructor(private readonly repository: OcorrenciasRepository) {}

  create(data: any) {
    return this.repository.create(data);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    const entity = await this.repository.findById(id);
    if (!entity) throw new NotFoundException('Ocorrencias não encontrado');
    return entity;
  }

  update(id: string, data: any) {
    return this.repository.update(id, data);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
