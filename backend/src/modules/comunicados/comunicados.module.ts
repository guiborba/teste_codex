import { Module } from '@nestjs/common';
import { ComunicadosController } from './comunicados.controller';
import { ComunicadosService } from './comunicados.service';
import { ComunicadosRepository } from './repository/comunicados.repository';

@Module({
  controllers: [ComunicadosController],
  providers: [ComunicadosService, ComunicadosRepository],
})
export class ComunicadosModule {}
