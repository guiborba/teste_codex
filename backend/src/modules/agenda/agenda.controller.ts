import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { AgendaService } from './agenda.service';

@Controller('agenda')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class AgendaController {
  constructor(private readonly service: AgendaService) {}

  @Get('overview')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  overview() {
    return this.service.getOverview();
  }
}
