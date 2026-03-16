import { Module } from '@nestjs/common';
import { MensagensController } from './mensagens.controller';
import { MensagensService } from './mensagens.service';
import { MensagensRepository } from './repository/mensagens.repository';

@Module({
  controllers: [MensagensController],
  providers: [MensagensService, MensagensRepository],
})
export class MensagensModule {}
