import { Injectable } from '@nestjs/common';

@Injectable()
export class MensalidadesService {
  // Serviço inicial: evoluir com regras de negócio e repositórios específicos.
  getOverview() {
    return { module: 'mensalidades', status: 'ok' };
  }
}
