import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { FrequenciasService } from './frequencias.service';

@Controller('frequencias')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class FrequenciasController {
  constructor(private readonly service: FrequenciasService) {}

  @Get('overview')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  overview() {
    return this.service.getOverview();
  }
}
