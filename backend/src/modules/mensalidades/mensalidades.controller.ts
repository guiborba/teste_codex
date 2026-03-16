import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../../common/decorators/roles.decorator';
import { RolesGuard } from '../../common/guards/roles.guard';
import { MensalidadesService } from './mensalidades.service';

@Controller('mensalidades')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class MensalidadesController {
  constructor(private readonly service: MensalidadesService) {}

  @Get('overview')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  overview() {
    return this.service.getOverview();
  }
}
