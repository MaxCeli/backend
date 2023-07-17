/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { UniversidadService } from './universidad.service';
import { UniversidadEntity } from './universidad.entity';
import { CreateUniversidadDto } from './dto/create-universidad.dto';
import { UpdateUniversidadDto } from './dto/update-universidad.dto';

@Controller('universidad')
export class UniversidadController {

    constructor(private universidadService:UniversidadService) {}

    @Get(':id_universidad')
    getUniversidadById(@Param('id_universidad') id: number): Promise<UniversidadEntity> {
        return this.universidadService.getUniversidadById(id)
    }

    @Get()
    getUniversidadList(): Promise<UniversidadEntity[]>  {
        return this.universidadService.getUniversidadList()
    }

    @Post()
    createUniversidad(@Body() nuevoUniversidad: CreateUniversidadDto) {
        return this.universidadService.createUniversidad(nuevoUniversidad)
    }

    @Delete(':id_universidad')
    deleteUniversidad(@Param('id_universidad') id: number){
        return this.universidadService.deleteUniversidadById(id)
    }

    @Patch(':id_universidad')
    updateUniversidad(@Param('id_universidad') id: number, @Body() universidad: UpdateUniversidadDto){
        return this.universidadService.updateUniversidad(id, universidad)
    }

}
