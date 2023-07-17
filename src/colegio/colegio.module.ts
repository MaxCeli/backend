/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ColegioService } from './colegio.service';
import { ColegioController } from './colegio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ColegioEntity } from './colegio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ColegioEntity])],
  providers: [ColegioService],
  controllers: [ColegioController],
  exports: [ColegioService]
})
export class ColegioModule {}
