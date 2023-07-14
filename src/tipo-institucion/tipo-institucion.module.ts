/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TipoInstitucionService } from './tipo-institucion.service';
import { TipoInstitucionController } from './tipo-institucion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoInstitucionEntity } from './tipo-institucion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoInstitucionEntity])],
  providers: [TipoInstitucionService],
  controllers: [TipoInstitucionController],
  exports: [TipoInstitucionService]
})
export class TipoInstitucionModule {}
