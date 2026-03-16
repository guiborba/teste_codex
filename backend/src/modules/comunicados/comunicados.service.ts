import { Injectable } from '@nestjs/common';

@Injectable()
export class ComunicadosService {
  // Serviço inicial: evoluir com regras de negócio e repositórios específicos.
  getOverview() {
    return { module: 'comunicados', status: 'ok' };
  }
}
