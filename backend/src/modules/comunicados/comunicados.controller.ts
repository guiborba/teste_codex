import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { ComunicadosService } from './comunicados.service';

@Controller('comunicados')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class ComunicadosController {
  constructor(private readonly service: ComunicadosService) {}

  @Get('overview')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  overview() {
    return this.service.getOverview();
  }
}
