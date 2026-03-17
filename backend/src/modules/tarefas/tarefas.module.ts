import { Module } from '@nestjs/common';
import { TarefasController } from './tarefas.controller';
import { TarefasService } from './tarefas.service';
import { TarefasRepository } from './repository/tarefas.repository';

@Module({
  controllers: [TarefasController],
  providers: [TarefasService, TarefasRepository],
})
export class TarefasModule {}
