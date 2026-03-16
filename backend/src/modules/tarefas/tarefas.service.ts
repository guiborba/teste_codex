import { Injectable } from '@nestjs/common';

@Injectable()
export class TarefasService {
  // Serviço inicial: evoluir com regras de negócio e repositórios específicos.
  getOverview() {
    return { module: 'tarefas', status: 'ok' };
  }
}
