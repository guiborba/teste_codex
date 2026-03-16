import { Injectable } from '@nestjs/common';

@Injectable()
export class NotasService {
  // Serviço inicial: evoluir com regras de negócio e repositórios específicos.
  getOverview() {
    return { module: 'notas', status: 'ok' };
  }
}
