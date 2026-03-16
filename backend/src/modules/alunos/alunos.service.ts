import { Injectable } from '@nestjs/common';

@Injectable()
export class AlunosService {
  // Serviço inicial: evoluir com regras de negócio e repositórios específicos.
  getOverview() {
    return { module: 'alunos', status: 'ok' };
  }
}
