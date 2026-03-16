import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { OcorrenciasService } from './ocorrencias.service';

@Controller('ocorrencias')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class OcorrenciasController {
  constructor(private readonly service: OcorrenciasService) {}

  @Get('overview')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  overview() {
    return this.service.getOverview();
  }
}
