/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { EstudianteController } from './estudiante.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EstudianteEntity } from './estudiante.entity';
import { TipoInstitucionModule } from 'src/tipo-institucion/tipo-institucion.module';
import { SeccionModule } from 'src/seccion/seccion.module';
import { EscuelaModule } from 'src/escuela/escuela.module';
import { SectorModule } from 'src/sector/sector.module';
import { ModalidadModule } from 'src/modalidad/modalidad.module';

@Module({
  imports: [TypeOrmModule.forFeature([EstudianteEntity]), TipoInstitucionModule, SeccionModule, EscuelaModule, SectorModule, ModalidadModule],
  providers: [EstudianteService],
  controllers: [EstudianteController],
  exports: [EstudianteService]
})
export class EstudianteModule {}
