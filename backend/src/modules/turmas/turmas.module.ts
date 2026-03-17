import { Module } from '@nestjs/common';
import { TurmasController } from './turmas.controller';
import { TurmasService } from './turmas.service';
import { TurmasRepository } from './repository/turmas.repository';

@Module({
  controllers: [TurmasController],
  providers: [TurmasService, TurmasRepository],
})
export class TurmasModule {}
