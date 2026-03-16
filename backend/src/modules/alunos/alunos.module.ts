import { Module } from '@nestjs/common';
import { AlunosController } from './alunos.controller';
import { AlunosService } from './alunos.service';
import { AlunosRepository } from './repository/alunos.repository';

@Module({
  controllers: [AlunosController],
  providers: [AlunosService, AlunosRepository],
})
export class AlunosModule {}
