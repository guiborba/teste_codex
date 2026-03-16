import { Injectable } from '@nestjs/common';

@Injectable()
export class DisciplinasService {
  // Serviço inicial: evoluir com regras de negócio e repositórios específicos.
  getOverview() {
    return { module: 'disciplinas', status: 'ok' };
  }
}
