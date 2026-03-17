import { Injectable, NotFoundException } from '@nestjs/common';
import { MensalidadesRepository } from './repository/mensalidades.repository';

@Injectable()
export class MensalidadesService {
  constructor(private readonly repository: MensalidadesRepository) {}

  create(data: any) {
    return this.repository.create(data);
  }

  findAll() {
    return this.repository.findAll();
  }

  async findOne(id: string) {
    const entity = await this.repository.findById(id);
    if (!entity) throw new NotFoundException('Mensalidades não encontrado');
    return entity;
  }

  update(id: string, data: any) {
    return this.repository.update(id, data);
  }

  remove(id: string) {
    return this.repository.delete(id);
  }
}
