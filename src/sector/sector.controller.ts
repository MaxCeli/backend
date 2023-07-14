/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorEntity } from './sector.entity';
import { CreateSectorDto } from './dto/create-sector.dto';
import { UpdateSectorDto } from './dto/update-sector.dto';

@Controller('sector')
export class SectorController {

    constructor(private sectorService: SectorService) {}

    @Get(':id_sector')
    getSectorById(@Param('id_sector') id: number): Promise<SectorEntity> {
        return this.sectorService.getSectorById(id)
    }

    @Get()
    getSectorList(): Promise<SectorEntity[]> {
        return this.sectorService.getSectorList()
    }

    @Post()
    createSector(@Body() nuevoSector: CreateSectorDto) {
        return this.sectorService.createSector(nuevoSector)
    }

    @Delete(':id_sector')
    deleteSector(@Param('id_sector') id: number) {
        return this.sectorService.deleteSector(id)
    }

    @Patch(':id_sector')
    updateSector(@Param('id_sector') id: number, @Body() sector: UpdateSectorDto) {
        return this.sectorService.updateSector(id, sector)
    }

}
