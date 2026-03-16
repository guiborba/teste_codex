import { Module } from '@nestjs/common';
import { OcorrenciasController } from './ocorrencias.controller';
import { OcorrenciasService } from './ocorrencias.service';
import { OcorrenciasRepository } from './repository/ocorrencias.repository';

@Module({
  controllers: [OcorrenciasController],
  providers: [OcorrenciasService, OcorrenciasRepository],
})
export class OcorrenciasModule {}
