import { Module } from '@nestjs/common';
import { FrequenciasController } from './frequencias.controller';
import { FrequenciasService } from './frequencias.service';
import { FrequenciasRepository } from './repository/frequencias.repository';

@Module({
  controllers: [FrequenciasController],
  providers: [FrequenciasService, FrequenciasRepository],
})
export class FrequenciasModule {}
