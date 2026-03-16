import { Injectable } from '@nestjs/common';

@Injectable()
export class OcorrenciasService {
  // Serviço inicial: evoluir com regras de negócio e repositórios específicos.
  getOverview() {
    return { module: 'ocorrencias', status: 'ok' };
  }
}
