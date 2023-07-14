/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { EscuelaService } from './escuela.service';
import { EscuelaController } from './escuela.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EscuelaEntity } from './escuela.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EscuelaEntity])],
  providers: [EscuelaService],
  controllers: [EscuelaController],
  exports: [EscuelaService]
})
export class EscuelaModule {}
