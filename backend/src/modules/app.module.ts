import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from '../database/prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AlunosModule } from './alunos/alunos.module';
import { TurmasModule } from './turmas/turmas.module';
import { DisciplinasModule } from './disciplinas/disciplinas.module';
import { NotasModule } from './notas/notas.module';
import { FrequenciasModule } from './frequencias/frequencias.module';
import { TarefasModule } from './tarefas/tarefas.module';
import { MensalidadesModule } from './mensalidades/mensalidades.module';
import { ComunicadosModule } from './comunicados/comunicados.module';
import { MensagensModule } from './mensagens/mensagens.module';
import { OcorrenciasModule } from './ocorrencias/ocorrencias.module';
import { AgendaModule } from './agenda/agenda.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    AuthModule,
    UsersModule,
    AlunosModule,
    TurmasModule,
    DisciplinasModule,
    NotasModule,
    FrequenciasModule,
    TarefasModule,
    MensalidadesModule,
    ComunicadosModule,
    MensagensModule,
    OcorrenciasModule,
    AgendaModule,
  ],
})
export class AppModule {}
