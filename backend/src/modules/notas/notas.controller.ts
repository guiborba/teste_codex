import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { Roles } from '../../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { NotasService } from './notas.service';

@Controller('notas')
@UseGuards(JwtAuthGuard, RolesGuard)
export class NotasController {
  constructor(private readonly service: NotasService) {}

  @Post()
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  create(@Body() dto: any) {
    return this.service.create(dto);
  }

  @Get()
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR', 'RESPONSAVEL', 'ALUNO')
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR', 'RESPONSAVEL', 'ALUNO')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.service.update(id, dto);
  }

  @Delete(':id')
  @Roles('ADMINISTRADOR', 'DIRETOR')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
