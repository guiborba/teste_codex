import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { DisciplinasService } from './disciplinas.service';

@Controller('disciplinas')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class DisciplinasController {
  constructor(private readonly service: DisciplinasService) {}

  @Get('overview')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  overview() {
    return this.service.getOverview();
  }
}
