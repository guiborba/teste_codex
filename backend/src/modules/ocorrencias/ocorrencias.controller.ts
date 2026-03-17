import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { Roles } from '../../common/decorators/roles.decorator';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';
import { RolesGuard } from '../../common/guards/roles.guard';
import { OcorrenciasService } from './ocorrencias.service';

@Controller('ocorrencias')
@UseGuards(JwtAuthGuard, RolesGuard)
export class OcorrenciasController {
  constructor(private readonly service: OcorrenciasService) {}

  @Post()
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  create(@Body() dto: any) {
    return this.service.create(dto);
  }

  @Get()
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  findAll() {
    return this.service.findAll();
  }

  @Patch(':id')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR')
  update(@Param('id') id: string, @Body() dto: any) {
    return this.service.update(id, dto);
  }

  @Post(':id/documento')
  @Roles('ADMINISTRADOR', 'DIRETOR', 'COORDENADOR', 'PROFESSOR')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: 'backend/src/uploads/documentos',
        filename: (_, file, cb) => cb(null, `${Date.now()}-${Math.random().toString(36).slice(2)}${extname(file.originalname)}`),
      }),
    }),
  )
  uploadDocumento(@Param('id') id: string, @UploadedFile() file: Express.Multer.File) {
    return this.service.update(id, { descricao: `Documento: ${file.path}` });
  }

  @Delete(':id')
  @Roles('ADMINISTRADOR', 'DIRETOR')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
