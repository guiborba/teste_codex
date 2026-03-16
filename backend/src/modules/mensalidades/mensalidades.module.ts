import { Module } from '@nestjs/common';
import { MensalidadesController } from './mensalidades.controller';
import { MensalidadesService } from './mensalidades.service';
import { MensalidadesRepository } from './repository/mensalidades.repository';

@Module({
  controllers: [MensalidadesController],
  providers: [MensalidadesService, MensalidadesRepository],
})
export class MensalidadesModule {}
