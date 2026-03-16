import { Injectable } from '@nestjs/common';

@Injectable()
export class AgendaService {
  // Serviço inicial: evoluir com regras de negócio e repositórios específicos.
  getOverview() {
    return { module: 'agenda', status: 'ok' };
  }
}
