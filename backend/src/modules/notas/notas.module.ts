import { Module } from '@nestjs/common';
import { NotasController } from './notas.controller';
import { NotasService } from './notas.service';
import { NotasRepository } from './repository/notas.repository';

@Module({
  controllers: [NotasController],
  providers: [NotasService, NotasRepository],
})
export class NotasModule {}
