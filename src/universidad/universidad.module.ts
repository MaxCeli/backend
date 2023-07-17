/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UniversidadService } from './universidad.service';
import { UniversidadController } from './universidad.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UniversidadEntity } from './universidad.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UniversidadEntity])],
  providers: [UniversidadService],
  controllers: [UniversidadController],
  exports: [UniversidadService]
})
export class UniversidadModule {}
