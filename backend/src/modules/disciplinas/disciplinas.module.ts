import { Module } from '@nestjs/common';
import { DisciplinasController } from './disciplinas.controller';
import { DisciplinasService } from './disciplinas.service';
import { DisciplinasRepository } from './repository/disciplinas.repository';

@Module({
  controllers: [DisciplinasController],
  providers: [DisciplinasService, DisciplinasRepository],
})
export class DisciplinasModule {}
