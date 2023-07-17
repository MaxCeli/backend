/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ModalidadService } from './modalidad.service';
import { ModalidadController } from './modalidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModalidadEntity } from './modalidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ModalidadEntity])],
  providers: [ModalidadService],  
  controllers: [ModalidadController],
  exports: [ModalidadService]
})
export class ModalidadModule {}
