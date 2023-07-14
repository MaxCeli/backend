/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SeccionService } from './seccion.service';
import { SeccionController } from './seccion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SeccionEntity } from './seccion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SeccionEntity])],
  providers: [SeccionService],
  controllers: [SeccionController],
  exports: [SeccionService]
})
export class SeccionModule {}
