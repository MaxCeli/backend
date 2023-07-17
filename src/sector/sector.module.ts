/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from './sector.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SectorEntity } from './sector.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SectorEntity])],
  providers: [SectorService],
  controllers: [SectorController],
  exports: [SectorService],
})
export class SectorModule {}
