import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { MensagensService } from './mensagens.service';

@Controller('mensagens')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class MensagensController {
  constructor(private readonly service: MensagensService) {}

  @Get('overview')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  overview() {
    return this.service.getOverview();
  }
}
