import { Injectable } from '@nestjs/common';

@Injectable()
export class MensagensService {
  // Serviço inicial: evoluir com regras de negócio e repositórios específicos.
  getOverview() {
    return { module: 'mensagens', status: 'ok' };
  }
}
